<template>
  <div class="container">
    <div v-if="this.$store.state.places">
      <div>{{ place.name }}</div>
      <div>{{ place.picture }}</div>
      <div>{{ place.northern }}</div>
      <div>{{ place.eastern }}</div>
      <div>{{ place.country }}</div>
      <div>{{ place.status }}</div>
      <div>{{ place.area }}</div>
      <div>{{ place.time }}</div>
      <div>{{ place.population }}</div>
      <div>{{ place.language }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceComponent",
  components: {},
  mounted() {},
  computed: {
    placeId() {
      return parseInt(this.$route.params.id);
    },
    place() {
      return this.$store.state.places[this.placeId];
    },
  },
  methods: {},
};
</script>