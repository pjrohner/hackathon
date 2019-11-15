import CommentsService from "@/services/CommentsService";

import commentsTypes from "../actionTypes";

const state = {
  loading: false,
  list: []
};

const getters = {
  commentList: state => {
    return state.list;
  }
};

const actions = {
  [commentsTypes.LOAD_COMMENT_BY_POST.action](context, payload) {
    const { commit } = context;
    const { postId } = payload;
    // Show loading.
    commit("setLoading");
    // Reset old list.
    commit(commentsTypes.LOAD_COMMENT_BY_POST.mutation, { list: [] });
    // Load new data
    CommentsService.getCommentsByPostId(postId)
      .then(comments => {
        // Commit new post list.
        commit(commentsTypes.LOAD_COMMENT_BY_POST.mutation, { list: comments });
      })
      .catch(error => {
        commit("setError", error);
      });
  },
  [commentsTypes.LOAD_POST_BY_USER_ID_ACTION](context) {
    // Reset old list when new post are loaded.
    context.commit(commentsTypes.LOAD_COMMENT_BY_POST.mutation, { list: [] });
  }
};

const mutations = {
  [commentsTypes.LOAD_COMMENT_BY_POST.mutation](state, { list }) {
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
