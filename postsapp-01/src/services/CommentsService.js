import axios from "axios";

const commentsUrl = `${process.env.VUE_APP_ROOT_URL}/comments`;

class CommentsService {
  static getCommentsByPostId(postId) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${commentsUrl}?postId=${postId}`);
        const data = res.data;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default CommentsService;
