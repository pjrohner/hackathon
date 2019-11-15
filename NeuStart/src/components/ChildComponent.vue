<template>
  <div class="client-section">
    <h2>Child Component</h2>
    Age: {{ age }}
    <div>
      <button @click="buttonClick()">Click me!</button>
    </div>
    <hr />
    <div>
      <div v-for="(user, index) in getUserListTotal5" :key="index">
        <b>{{ user.name }}</b>
        -
        Company{{ user.company.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChildComponent",
  props: {
    age: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUserListTotal3", "getUserListTotal5"])
  },
  methods: {
    buttonClick() {
      console.log("Button was clicked..");
      this.$emit("childButtonWasPressed", { randomValue: Math.random(), color: "blue", year: 2019, company: "basf" });
    }
  },
  created() {
    this.$store.dispatch("loadUser", { userCount: 10 });
  }
};
</script>

<style>
.client-section {
  background-color: bisque;
}
</style>
