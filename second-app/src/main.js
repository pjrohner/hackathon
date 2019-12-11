import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import plotly from "vue-plotly";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  plotly,
  render: h => h(App)
}).$mount("#app");
