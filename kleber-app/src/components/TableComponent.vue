<template>
  <div>
    <v-card>
      <v-card-title>{{ componentTitle }}</v-card-title>
      <v-divider></v-divider>
      <v-data-table
        v-if="hasData"
        :headers="tableHeaders"
        :items="tableItems"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
      <div v-else>
        <v-card-subtitle>Keine Daten vorhanden</v-card-subtitle>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    componentTitle: String,
    tableData: Object
  },
  computed: {
    hasData: function() {
      return this.tableData.tableData.length > 0;
    },
    tableHeaders: function() {
      return this.tableData.tableHeaders;
    },
    tableItems: function() {
      return this.tableData.tableData;
    }
  }
};
</script>

<style></style>
