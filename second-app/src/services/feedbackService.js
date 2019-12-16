import axios from "axios";

import store from "../store/index";

const ROOT_URL = "http://localhost:8000";

export async function postUserFeedback(payload) {
  try {
    console.log("postUserFeedback>payload", payload);
    const response = await axios.post(`${ROOT_URL}/feedback`, payload);
    return response.data;
  } catch (error) {
    store.commit("saveError", error);
    return {};
  }
}

export async function loadFeebacks() {
  try {
    const response = await axios.get(`${ROOT_URL}/feedback`);
    return response.data;
  } catch (error) {
    store.commit("saveError", error);
    return [];
  }
}

export async function loadFeebackById(payload) {
  try {
    const response = await axios.get(`${ROOT_URL}/feedback/${payload.id}`);
    return response.data;
  } catch (error) {
    store.commit("saveError", error);
    return {};
  }
}
