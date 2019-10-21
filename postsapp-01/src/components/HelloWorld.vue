<template>
  <v-container fluid>
    <DashboardController />
  </v-container>
</template>

<script>
import DashboardController from "./dashboard/DashboardController";

export default {
  components: { DashboardController },
  data: () => ({})
};
</script>
