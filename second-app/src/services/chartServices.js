import axios from "axios";

import store from "../store/index";

const ROOT_URL = "http://localhost:8000";

export async function getScatterData() {
  try {
    const chartData = await axios.get(`${ROOT_URL}/scatter`);
    return chartData.data;
  } catch (error) {
    store.commit("saveError", error);
    return {};
  }
}
