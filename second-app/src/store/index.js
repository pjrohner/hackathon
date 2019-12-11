import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { getScatterData } from "../services/chartServices";

export default new Vuex.Store({
  state: {
    scatter: {},
    error: {},
    books: []
  },
  actions: {
    async loadChartScatter(context) {
      const chartData = await getScatterData();
      context.commit("saveChartData", { chartData });
    }
  },
  getters: {
    getScatterData(state) {
      return state.scatter;
    },
    getError(state) {
      return state.error;
    }
  },
  mutations: {
    // Save all posts into the state.
    saveChartData(state, payload) {
      state.scatter = payload.chartData;
    },
    // Save and error messages into the state.
    saveError(state, payload) {
      state.error = payload;
    }
  },
  modules: {}
});
