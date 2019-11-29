import axios from "axios";

import store from '../store/index'

const ROOT_URL = "https://jsonplaceholder.typicode.com";

export async function getAllPosts() {
  try {
    let posts = await axios.get(`${ROOT_URL}/posts`);
    return posts.data;
  } catch (error) {
    store.commit('saveError', error);
    return [];
  }
}

export async function getPostsByUser(payload) {
  try {
    let posts = await axios.get(`${ROOT_URL}/posts?userId=${payload.user.id}`);
    return posts.data;
  } catch (error) {
    store.commit('saveError', error);
    return [];
  }
}
