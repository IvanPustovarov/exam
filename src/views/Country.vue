<template>
  <div class="container">
    <h1 class="country">{{ country.name }}</h1>

    <PlaceLocalComponent
      :place="place"
      v-for="place in places"
      :key="place.id"
      @click="goToPlace(place)"
    />
  </div>
</template>

<script>
import PlaceLocalComponent from "./PlaceLocal.vue";
export default {
  name: "CountryComponent",
  components: {
    PlaceLocalComponent,
  },
  mounted() {},
  computed: {
    countryId() {
      return this.$route.params.first_id;
    },
    country() {
      return this.$store.state.countries.find(
        (country) => country.value === this.countryId
      );
    },
    places() {
      return this.$store.state.placesLocal.filter(
        (place) => place.country === this.countryId
      );
    },
  },
  methods: {
    goToPlace(place) {
      console.log(place);
    },
  },
};
</script>

<style lang="scss" scoped>
.country {
  margin: 1rem 1rem 1rem 0;
}
</style>