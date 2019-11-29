<template>
  <div>
    <v-card>
      <div v-if="userSelected">
        <v-card-title>{{ componentTitle }}: {{ userSelected.name }}</v-card-title>
        <v-card-subtitle>{{ userSelected.company.name }}</v-card-subtitle>
        <v-card-text>{{ userSelected.company.catchPhrase }}</v-card-text>
      </div>
      <div v-else>
        <v-card-title>{{ componentTitle }}: Kein Benutzer ausgewählt</v-card-title>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "InfoComponent",
  props: {
    componentTitle: String,
    userSelected: {
      type: Object,
      required: false
    }
  }
};
</script>

<style></style>
