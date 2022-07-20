<template>
  <div class="container">
    <div class="places">
      <div
        v-for="place in getAllPlaces"
        :key="place.id"
        class="place"
        @click="goToPlace(place.id)"
      >
        <div>
          <img :src="place.picture" alt="" />
        </div>
        <div>{{ place.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlacesComponent",
  components: {},
  computed: {
    getAllPlaces() {
      return this.$store.state.places;
    },
  },
  methods: {
    goToPlace(id) {
      this.$router.push(`/places/${id - 1}`);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.places {
  display: flex;
  .place {
    display: flex;
    background-color: rgb(83, 120, 144);
    margin: 1rem 1rem 1rem 0;
    cursor: pointer;
    // width: 250px;
    // height: 250px;
  }
}
.nav {
  margin-bottom: 10px;
}
</style>