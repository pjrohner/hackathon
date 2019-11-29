<template>
  <div>
    <div>TableComponent</div>
    <hr />
    {{ tableData }}
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    tableData: Array
  }
};
</script>

<style></style>
