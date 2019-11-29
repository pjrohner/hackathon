<template>
  <div>
    <div v-for="user in filterData" :key="user.id">
      <v-btn x-small @click="selectUser(user)"
        >{{ user.name }}/{{ user.id }}</v-btn
      >
    </div>
    <input
      type="text"
      v-model="train"
      placeholder="Please enter your train number .."
    />
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  props: {
    filterData: Array
  },
  data() {
    return {
      train: ""
    };
  },
  methods: {
    selectUser(user) {
      this.$emit("userWasSelect", { user });
    }
  }
};
</script>

<style></style>
