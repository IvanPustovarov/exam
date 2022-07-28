<template>
  <div class="place">
    {{ place.name }}
  </div>
</template>

<script>
export default {
  name: "PlaceLocalComponent",
  props: {},
  components: {},
  mounted() {},
  computed: {
    placeId() {
      return this.$route.params.second_id;
    },
    place() {
      return this.$store.state.placesLocal.find(
        (place) => place.id === this.placeId
      );
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>