import axios from "axios";

import store from '../store/index'

const ROOT_URL = "https://jsonplaceholder.typicode.com";

export async function getAllUsers() {
  try {
    let users = await axios.get(`${ROOT_URL}/users`);
    return users.data;
  } catch (error) {
    store.commit('saveError', error);
    return [];
  }
}
