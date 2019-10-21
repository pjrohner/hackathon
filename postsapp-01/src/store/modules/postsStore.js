import PostsService from "../../services/PostsService";

const postService = new PostsService();

const state = {
  loading: false,
  list: []
};

const getters = {
  postList: state => {
    return state.list;
  }
};

const actions = {
  loadPostsByUserId(context, payload) {
    const { commit } = context;
    const { userId } = payload;
    // Set loading true.
    commit("setLoading");
    // Reset old post list.
    commit("mutatePostList", { list: [] });
    // Load new post list.
    postService
      .getPostsByUserId(userId)
      .then(response => {
        // Commit new post list.
        commit("mutatePostList", { list: response.data });
      })
      .catch(error => {
        commit("setError", error);
      });
  }
};

const mutations = {
  mutatePostList(state, { list }) {
    state.list = list;
    state.loading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
