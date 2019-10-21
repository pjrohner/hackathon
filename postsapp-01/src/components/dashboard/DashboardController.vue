<template>
  <v-container class="grey lighten-5" fluid>
    <v-row no-gutters fluid>
      <v-col cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          <UsersComponent :userList="this.users" @loadPosts="getPostsByUser"></UsersComponent>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          <PostsComponent :postList="this.postList" @loadComments="getCommentsByPost"></PostsComponent>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          <CommentsComponent :commentList="this.commentList"></CommentsComponent>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import UsersComponent from "./UsersComponent";
import PostsComponent from "./PostsComponent";
import CommentsComponent from "./CommentsComponent";

import storeActions from "@/store/actionTypes.js";

export default {
  name: "DashboardController",
  components: {
    CommentsComponent,
    PostsComponent,
    UsersComponent
  },
  data() {
    return {};
  },
  created() {
    console.log("created!");
    this.$store.dispatch("loadUsers");
  },
  mounted() {
    console.log("mounted!");
  },
  computed: {
    ...mapGetters(["postList", "commentList"]),
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    getPostsByUser(user) {
      console.log("getPostsByUser>user=", user);
      console.log("getPostsByUser>LOAD_POST_BY_USER_ID_ACTION=", storeActions.LOAD_POST_BY_USER_ID_ACTION);
      this.$store.dispatch(storeActions.LOAD_POST_BY_USER_ID_ACTION, { userId: user.id });
    },
    getCommentsByPost(post) {
      console.log("getCommentsByPost>post=", post);
      console.log("getCommentsByPost>storeActions.LOAD_COMMENT_BY_POST=", storeActions.LOAD_COMMENT_BY_POST);
      this.$store.dispatch(storeActions.LOAD_COMMENT_BY_POST.action, { postId: post.id });
    }
  }
};
</script>

<style scoped></style>
