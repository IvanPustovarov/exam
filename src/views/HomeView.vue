<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: "HomeView",
  mounted() {},
  computed: {
    places() {
      return this.$store.state.places;
    },
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    goToEmployee(place) {
      this.$router.push(`/employees/${place.id - 1}`);
    },
  },
};
</script>

<style scored lang="scss">
.random-employee {
  cursor: pointer;
  color: aqua;
}
</style>
