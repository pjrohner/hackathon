import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

const doDebugStore = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: doDebugStore,
  state: {
    userList: []
  },
  mutations: {
    loadedUsers(state, payload) {
      console.log("store>payload=", payload);
      state.userList = payload.userList;
    }
  },
  actions: {
    loadUser(context, payload) {
      console.log("store.actions>payload=", payload);
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          // Save also to store.
          context.commit("loadedUsers", { userList: response.data });
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  modules: {},
  getters: {
    getUserListTotal: state => {
      return state.userList;
    },
    getUserListTotal2: state => {
      return state.userList;
    },
    getUserListTotal3: state => {
      return state.userList;
    },
    getUserListTotal4: state => {
      return state.userList;
    },
    getUserListTotal5: state => {
      return state.userList;
    }
  }
});
