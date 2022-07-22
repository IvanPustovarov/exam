<template>
  <div class="container">
    <h1>The most ******* places in the world</h1>
    <p class="description">
      sfksldfksldfkl klsdkflsdkfl ksdklfksl kdflksldfksldfkls k kfsldkf sldfk
      lsd fk lsdfksl dfk lsldfkkl sdf sfksldfksldfkl klsdkflsdkfl ksdklfksl
      kdflksldfksldfkls k kfsldkf sldfk lsd fk lsdfksl dfk lsldfkkl sdf
    </p>
    <p class="description">
      sfksldfksldfkl klsdkflsdkfl ksdklfksl kdflksldfksldfkls k kfsldkf sldfk
      lsd fk lsdfksl dfk lsldfkkl sdf sfksldfksldfkl klsdkflsdkfl ksdklfksl
      kdflksldfksldfkls k kfsldkf sldfk lsd fk lsdfksl dfk lsldfkkl sdf
    </p>
    <p class="description">
      sfksldfksldfkl klsdkflsdkfl ksdklfksl kdflksldfksldfkls k kfsldkf sldfk
      lsd fk lsdfksl dfk lsldfkkl sdf sfksldfksldfkl klsdkflsdkfl ksdklfksl
      kdflksldfksldfkls k kfsldkf sldfk lsd fk lsdfksl dfk lsldfkkl sdf
    </p>
    <p class="description">
      sfksldfksldfkl klsdkflsdkfl ksdklfksl kdflksldfksldfkls k kfsldkf sldfk
      lsd fk lsdfksl dfk lsldfkkl sdf sfksldfksldfkl klsdkflsdkfl ksdklfksl
      kdflksldfksldfkls k kfsldkf sldfk lsd fk lsdfksl dfk lsldfkkl sdf
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
  width: 300px;
  margin: 1rem 0 0 1rem;
}
</style>
