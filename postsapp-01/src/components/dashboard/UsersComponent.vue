<template>
  <div>
    <h2>User List</h2>
    <template>
      <v-divider class="mb-5"></v-divider>
    </template>
    <v-expansion-panels>
      <v-expansion-panel v-for="(user, i) in userList" :key="i">
        <v-expansion-panel-header>
          {{ user.id }} - {{ user.name }} -
          <small>{{ user.company.bs }}</small>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <!-- User Details -->
          <template>
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">{{ getFullAddress(user) }}</div>
                  <v-list-item-title class="headline mb-5">
                    <a href="{ user.website }" target="_blank">{{ user.website }}</a>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <h2 class="mb-3">{{ user.company.name }}</h2>
                    <div>{{ user.company.catchPhrase }}</div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn @click.prevent="viewPosts(user)">View Posts</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "UsersComponent",
  props: {
    userList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    getFullAddress(user) {
      // Get the users address.
      return `${user.address.street} / ${user.address.zipcode} ${user.address.city}`;
    },
    viewPosts(user) {
      console.log(user);
      // Load all posts of this user.
      this.$emit("loadPosts", user);
    }
  }
};
</script>

<style scoped></style>
