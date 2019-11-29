<template>
  <div>
    <div class="container-root">
      <HeaderComponent class="container-item header"></HeaderComponent>
      <FilterComponent
        :componentTitle="'Liste aller Benutzer'"
        :filterData="allUsers"
        @userWasSelect="userSelected($event)"
        class="container-item filter"
        >Filter</FilterComponent
      >
      <CardComponent class="container-item card">Shopping Card</CardComponent>
      <ChartComponent class="container-item chart"></ChartComponent>
      <InfoComponent
      :componentTitle="'Benutzer Details'"
      :userSelected="selectedUser" class="container-item info"
        >Info</InfoComponent
      >
      <TableComponent
        :componentTitle="'Posts des ausgewählten Benutzer'"
        :tableData="userTableData"
        class="container-item data-table"
      ></TableComponent>
      <FooterComponent class="container-item footer">Footer</FooterComponent>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import HeaderComponent from "./HeaderComponent";
import ChartComponent from "./ChartComponent";
import InfoComponent from "./InfoComponent";
import FooterComponent from "./FooterComponent";
import FilterComponent from "./FilterComponent";
import CardComponent from "./CardComponent";
import TableComponent from "./TableComponent";

export default {
  name: "DashboardController",
  components: {
    HeaderComponent,
    ChartComponent,
    InfoComponent,
    FooterComponent,
    FilterComponent,
    CardComponent,
    TableComponent
  },
  created() {
    this.$store.dispatch("loadAllUsers");
  },
  methods: {
    userSelected(data) {
      this.$store.dispatch("loadPostsByUser", { user: data });
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      "selectedUser"
      // ...
    ]),
    allPosts() {
      return this.$store.getters.allPosts;
    },
    allUsers() {
      return this.$store.getters.allUsers;
    },
    userTableData() {
      let headers = [];
      if (this.allPosts[0]) {
        headers = Object.keys(this.allPosts[0]).map(header => {
          return { text: header.toUpperCase(), value: header };
        });
      }
      return { tableData: this.allPosts, tableHeaders: headers };
    }
  }
};
</script>

<style scoped>
.container-root {
  border: 1px solid lightblue;
  /* margin: 0;
  width: 100vw;
  height: 100vh; */
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 75px 150px auto 100px 1fr;
  grid-template-areas:
    "header header header"
    "filter chart info"
    "filter data-table data-table"
    "card data-table data-table"
    "footer footer footer";
  grid-gap: 5px;
}
.container-item {
  border: 1px solid rgba(211, 211, 211, 0.5);
}
.header {
  grid-area: header;
}
.filter {
  grid-area: filter;
}
.card {
  grid-area: card;
}
.chart {
  grid-area: chart;
}
.info {
  grid-area: info;
}
.footer {
  grid-area: footer;
}
.data-table {
  grid-area: data-table;
}
</style>
