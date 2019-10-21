<template>
  <div>
    <h2>Post List</h2>
    <template>
      <v-divider class="mb-5"></v-divider>
    </template>
    <template>
      <div v-for="(post, index) in this.postList" :key="index">
        <v-card class="mx-auto" tile>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>{{ post.id }} - {{ post.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ post.body }}</v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-btn @click="showComments(post)">Show Comments</v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "PostsComponent",
  props: {
    postList: {
      type: Array,
      requierd: false
    }
  },
  data() {
    return {};
  },
  methods: {
    showComments(post) {
      this.$emit("loadComments", post);
    }
  }
};
</script>

<style scoped></style>
