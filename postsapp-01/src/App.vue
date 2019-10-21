<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ title }}</span>
        <!-- <span>Posts And Comments</span> -->
        <!-- <span class="font-weight-light">{{ title }}</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn text to="about">
        <span class="mr-2">About</span>
      </v-btn>
      <!-- <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>-->
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: process.env.VUE_APP_TITLE
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
