import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import postsStore from "./modules/postsStore";
import commentsStore from "./modules/commentsStore";

Vue.use(Vuex);

const doDebugStore = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: doDebugStore,
  state: {
    loading: false,
    users: [],
    error: ""
  },
  mutations: {
    loadUsersSuccess(state, userList) {
      state.users = userList;
      state.loading = false;
    },
    setError(state, error) {
      state.error = error;
      state.loading = false;
    },
    setLoading(state) {
      state.loading = true;
    }
  },
  actions: {
    ["loadUsers"](context) {
      const { commit } = context;
      // Set loading true.
      commit("setLoading");
      // Load new user list.
      axios
        .get(`${process.env.VUE_APP_ROOT_URL}/users`)
        .then(response => {
          // Commit new user list.
          commit("loadUsersSuccess", response.data);
        })
        .catch(error => {
          commit("setError", error);
        });
    }
  },
  modules: {
    posts: postsStore,
    comments: commentsStore
  }
});
