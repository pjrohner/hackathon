<template>
  <div>
    <h5>{{ componentTitle }}</h5>
    <v-divider></v-divider>
    <div v-for="user in filterData" :key="user.id">
      <v-btn x-small @click="selectUser(user)"
        >{{ user.name }}/{{ user.id }}</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  props: {
    componentTitle: String,
    filterData: Array
  },
  methods: {
    selectUser(user) {
      this.$emit("userWasSelect", { user });
    }
  }
};
</script>

<style></style>
