<template>
  <div class="container">
    <h1>User id {{ employeeId }}</h1>
    <div>user name: {{ employee.name }}</div>
  </div>
</template>

<script>
export default {
  name: "EmployeeComponent",
  components: {},
  mounted() {},
  computed: {
    employeeId() {
      return parseInt(this.$route.params.id);
    },
    employeers() {
      return this.$store.state.employeers;
    },
    employee() {
      return this.employeers.find(
        (employee) => employee.id === this.employeeId
      );
    },
  },
};
</script>