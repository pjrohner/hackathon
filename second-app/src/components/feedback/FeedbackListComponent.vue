<template>
  <div>
    <h2>{{ pageTitle }}</h2>
    <hr />
    <div v-if="userList.length > 0">
      <v-container>
        <v-row>
          <span v-for="user in userList" :key="user.id">
            <v-btn class="ma-1" color="success" @click="loadSelectedUser(user)"
              >{{ user.firstname }} {{ user.lastname }}</v-btn
            >
          </span>
        </v-row>
      </v-container>
    </div>
    <div v-else>
      <v-container>
        No Data Found!
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackListComponent",
  props: {
    pageTitle: { type: String, required: true },
    userList: { type: Array, required: false }
  },
  methods: {
    loadSelectedUser(selectedUser) {
      this.$emit("getFeedbackOfUser", selectedUser);
    }
  }
};
</script>

<style></style>
