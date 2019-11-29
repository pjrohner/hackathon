import Vue from "vue";
import Vuex from "vuex";
import { getAllPosts, getPostsByUser } from "../services/postServices";
import { getAllUsers } from "../services/userServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: {
      users: [],
      selectedUser: null
    },
    card: {},
    chart: {},
    info: {},
    dataTable: {
      posts: []
    },
    loading: false,
    error: {}
  },
  mutations: {
    // Save all posts into the state.
    savePosts(state, payload) {
      state.dataTable.posts = payload.posts;
    },
    // Save all users into the state.
    saveAllUsers(state, payload) {
      state.filter.users = payload.users;
    },
    // Save and error messages into the state.
    saveSelectedUser(state, payload) {
      state.filter.selectedUser = payload.user.user;
    },
    // Save and error messages into the state.
    saveError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    // Load posts from the back end.
    async loadAllPosts(context) {
      let posts = await getAllPosts();
      context.commit("savePosts", { posts });
    },
    // Load posts from the back end.
    async loadPostsByUser(context, payload) {
      context.commit("saveSelectedUser", { user: payload.user });
      let posts = await getPostsByUser(payload.user);
      context.commit("savePosts", { posts });
    },
    // Load all users from the back end.
    async loadAllUsers(context) {
      let users = await getAllUsers();
      context.commit("saveAllUsers", { users });
    }
  },
  modules: {},
  getters: {
    allPosts: function(state) {
      return state.dataTable.posts;
    },
    allUsers: function(state) {
      return state.filter.users;
    }
  }
});
