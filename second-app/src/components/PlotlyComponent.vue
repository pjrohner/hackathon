<template>
  <div>
    <h1>Plotly Chart ...</h1>
    <div>
      <Plotly
        @click="chartClicked"
        :data="getScatterData.data"
        :layout="getScatterData.layout"
        :options="getScatterData.options"
        :autoResize="true"
        :display-mode-bar="false"
      ></Plotly>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { Plotly } from "vue-plotly";

export default {
  name: "PlotlyComponent",
  components: {
    Plotly
  },
  data() {
    return {};
  },
  methods: {
    chartClicked(event) {
      const { points } = event;
      console.log("PlotlyComponent.chartClicked>points:", points);
    }
  },
  created() {
    this.$store.dispatch("loadChartScatter");
  },
  computed: {
    ...mapGetters([
      "getScatterData",
      "getError"
      // ...
    ])
  }
};
</script>

<style></style>
