<template>
  <div class="container" v-if="!isPlace">
    <h1 class="country">{{ country.name }}</h1>
    <div class="places">
      <PlaceComponent
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
import PlaceComponent from "./Place.vue";
export default {
  name: "CountryComponent",
  components: {
    PlaceComponent,
  },
  data() {
    return {
      isPlace: false,
    };
  },
  mounted() {},
  updated() {
    if (this.params.second_id) {
      this.isPlace = true;
    }
    if (this.params.first_id && !this.params.second_id) {
      this.isPlace = false;
    }
  },
  computed: {
    countryId() {
      return this.params.first_id;
    },
    params() {
      return this.$route.params;
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
      this.isPlace = true;
      this.$router.push(`${this.params.first_id}/${place.id}`);
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