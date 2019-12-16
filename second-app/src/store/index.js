import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { getScatterData } from "../services/chartServices";
import {
  postUserFeedback,
  loadFeebacks,
  loadFeebackById
} from "../services/feedbackService";

export default new Vuex.Store({
  state: {
    scatter: {},
    error: {},
    books: [],
    feedback: {
      allFeebacks: [],
      selectedFeedback: {}
    }
  },
  actions: {
    async loadChartScatter(context) {
      const chartData = await getScatterData();
      context.commit("saveChartData", { chartData });
    },
    async submitFeedback(context, payload) {
      const feedback = await postUserFeedback(payload);
      context.commit("saveFeedback", { feedback });
    },
    async loadAllFeedbacks(context) {
      const feedbacks = await loadFeebacks();
      context.commit("initFeedback", { feedbacks });
    },
    async loadFeedbackById(context, payload) {
      const feedback = await loadFeebackById(payload);
      context.commit("setFeedback", { feedback });
    }
  },
  getters: {
    scatterData(state) {
      return state.scatter;
    },
    getAllFeedbacks(state) {
      return state.feedback.allFeebacks;
    },
    selectedFeedback(state) {
      return state.feedback.selectedFeedback;
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
    saveFeedback(state, payload) {
      state.feedback.allFeebacks.push(payload.feedback);
    },
    initFeedback(state, payload) {
      state.feedback.allFeebacks = payload.feedbacks;
    },
    setFeedback(state, payload) {
      state.feedback.selectedFeedback = payload.feedback;
    },
    // Save and error messages into the state.
    saveError(state, payload) {
      state.error = payload;
    }
  },
  modules: {}
});
