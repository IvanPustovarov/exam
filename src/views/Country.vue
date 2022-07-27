<template>
  <div class="container">
    {{ country.name }}
  </div>
</template>

<script>
export default {
  name: "CountryComponent",
  components: {},
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
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>