<template>
  <div>
    <h2>Summary Chart</h2>
    <hr />
    <div>
      <Plotly
        @click="chartClicked"
        :data="scatterData.data"
        :layout="scatterData.layout"
        :options="scatterData.options"
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
      "scatterData",
      "getError"
      // ...
    ])
  }
};
</script>

<style></style>
