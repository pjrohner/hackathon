<template>
  <div>
    <h2>Comment List</h2>
    <template>
      <v-divider class="mb-5"></v-divider>
    </template>
    <div v-for="(comment, index) in this.commentList" :key="index">
      <v-card class="mx-auto" tile>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>{{ comment.id }} - {{ comment.name }}</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ comment.body }}</v-list-item-subtitle>
            <v-list-item-subtitle>Posted By: {{ comment.email }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentsComponent",
  props: {
    commentList: {
      type: Array,
      required: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
