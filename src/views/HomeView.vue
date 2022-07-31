<template>
  <div class="container">
    <h1>{{ description.homeName }}</h1>
    <p class="description">
      {{ description.homeParagraph1 }}
    </p>
    <p class="description">
      {{ description.homeParagraph2 }}
    </p>
    <p class="description">
      {{ description.homeParagraph3 }}
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  mounted() {},
  computed: {
    places() {
      return this.$store.state.places;
    },
    description() {
      return this.$store.state.descriptions;
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
.description {
  width: 35rem;
  font-size: 18px;
  margin: 1rem 0 0 1rem;
}
</style>
