<template>
  <div class="container">
    <div v-if="this.$store.state.employees">
      <div>user name: {{ employee.name }}</div>
      <div>user surname: {{ employee.surname }}</div>
      <div>user patronymic: {{ employee.patronymic }}</div>
      <div>user birthdate: {{ employee.birthdate }}</div>
      <div>user address: {{ employee.address }}</div>
      <div>user experience: {{ employee.experience }}</div>
      <div>user about: {{ employee.about }}</div>
    </div>
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
    employee() {
      return this.$store.state.employees[this.employeeId];
    },
  },
  methods: {},
};
</script>