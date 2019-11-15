import axios from "axios";

export default class PostsService {
  getPostsByUserId(userId) {
    console.log("PostsService.getPostsByUserId>userId=", userId);
    let url = `${process.env.VUE_APP_ROOT_URL}/posts?userId=${userId}`;
    return axios.get(url);
  }
}
