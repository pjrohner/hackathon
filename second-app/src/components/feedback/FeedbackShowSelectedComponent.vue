<template>
  <div class="text-center ma-2">
    <!-- <v-btn dark @click="snackbar = true">Open Snackbar</v-btn> -->
    <v-snackbar v-model="snackbar" :timeout="2000">
      <!-- {{ getSelectedFeedback.firstname }} {{ getSelectedFeedback.lastname }} /
      <br />
      {{ getSelectedFeedback.email }} -->
      {{ userInfo }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FeedbackShowSelectedComponent",
  data: () => ({
    snackbar: false
  }),
  computed: {
    ...mapGetters([
      "selectedFeedback"
      // ...
    ]),
    userInfo() {
      return `${this.selectedFeedback.firstname} ${this.selectedFeedback.lastname} / ${this.selectedFeedback.email} [${this.selectedFeedback.id}]`;
    }
  },
  watch: {
    //   Check if a new feedback user was selected. If so do show the snackbar.
    selectedFeedback(newValue, oldValue) {
      if (newValue != oldValue) {
        this.snackbar = true;
      }
    }
  }
};
</script>

<style></style>
