<template>
  <div class="container" v-if="!isPlace">
    <h1 class="country">{{ country.name }}</h1>
    <div class="places">
      <PlaceLocalComponent
        :place="place"
        v-for="place in places"
        :key="place.id"
        @click="goToPlace(place)"
      />
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import PlaceLocalComponent from "./PlaceLocal.vue";
export default {
  name: "CountryComponent",
  components: {
    PlaceLocalComponent,
  },
  data() {
    return {
      isPlace: false,
    };
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
      this.isPlace = !this.isPlace;
      this.$router.push(`${this.$route.params.first_id}/${place.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.country {
  margin: 1rem 1rem 1rem 0;
}
.places {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>