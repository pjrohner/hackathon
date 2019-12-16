<template>
  <div>
    <FeedbackFormComponent
      :pageTitle="'Feedback Form'"
      @submitFeedback="submitUserFeedback"
    ></FeedbackFormComponent>
    <FeedbackListComponent
      class="mt-2"
      :pageTitle="'User Feedback List'"
      :userList="getAllFeedbacks"
      @getFeedbackOfUser="loadUser"
    ></FeedbackListComponent>
    <FeedbackShowSelectedComponent></FeedbackShowSelectedComponent>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import FeedbackFormComponent from "./FeedbackFormComponent";
import FeedbackListComponent from "./FeedbackListComponent";
import FeedbackShowSelectedComponent from "./FeedbackShowSelectedComponent";

export default {
  name: "FeedbackController",
  components: {
    FeedbackFormComponent,
    FeedbackListComponent,
    FeedbackShowSelectedComponent
  },
  created() {
    this.$store.dispatch("loadAllFeedbacks");
  },
  computed: {
    ...mapGetters([
      "getAllFeedbacks"
      // ...
    ])
  },
  methods: {
    loadUser(user) {
      this.$store.dispatch("loadFeedbackById", user);
    },
    submitUserFeedback(user) {
      this.$store.dispatch("submitFeedback", user);
    }
  }
};
</script>

<style></style>
