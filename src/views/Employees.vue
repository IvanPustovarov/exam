<template>
  <div class="container">
    <div
      v-for="employee in getAllEmployees"
      :key="employee.id"
      class="employee"
      @click="goToEmployee(employee.id)"
    >
      <div>user name: {{ employee.name }}</div>
      <div>user surname: {{ employee.surname }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "employeesComponent",
  components: {},
  computed: {
    getAllEmployees() {
      return this.$store.state.employees;
    },
  },
  methods: {
    goToEmployee(id) {
      this.$router.push(`/employees/${id - 1}`);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.employee {
  background-color: rgb(83, 120, 144);
  margin-bottom: 10px;
  cursor: pointer;
}
</style>