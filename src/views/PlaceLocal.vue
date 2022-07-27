<template>
  <div class="place">
    <div class="picture">
      <img :src="place.picture" alt="" />
    </div>
    <!-- <div>{{ place.name }}</div>
    <div>{{ place.area }}</div>
    <div>{{ place.country }}</div>
    <div>{{ place.eastern }}</div>
    <div>{{ place.northern }}</div>
    <div>{{ place.language }}</div>
    <div>{{ place.population }}</div>
    <div>{{ place.time }}</div> -->
  </div>
</template>

<script>
export default {
  name: "PlaceLocalComponent",
  props: {
    place: {
      type: Object,
      default: null,
    },
  },
  components: {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.place {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem 0 1rem 1rem;
  .picture {
    width: 30rem;
    max-width: 100%;
  }
}
</style>