<template>
  <div>
    <h1>{{ title }}</h1>
    <hr />
    <ChildComponent :age="this.numberOfUsers" @childButtonWasPressed="buttonPressed($event)"></ChildComponent>
    <h3>{{ footer }}</h3>
    <hr />
    Child button clicked value total: {{ this.childButtonClickedcount }}
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";
export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      title: "Hello World from the data attribute ...",
      footer: "See you next year ...",
      numberOfUsers: 27,
      childButtonClickedcount: 0
    };
  },
  methods: {
    buttonPressed(detailValue) {
      console.log("Parent received button presssed: detailValue=", detailValue);
      this.childButtonClickedcount += detailValue.randomValue;
    }
  }
};
</script>
