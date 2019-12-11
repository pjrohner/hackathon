<template>
  <div class="home">
    <PlotlyComponent></PlotlyComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import PlotlyComponent from "../components/PlotlyComponent";

export default {
  name: "home",
  components: {
    PlotlyComponent
  }
};
</script>
