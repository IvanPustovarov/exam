<template>
  <div class="container">
    <h1>{{ section.name }}</h1>
    <p class="description">{{ section.description }}</p>
    <div :style="{ marginBottom: 1 + 'rem' }">
      Страны и города относящиеся к {{ section.name }}:
    </div>
    <div class="countries">
      <div
        v-for="country in countries"
        :key="country.value"
        class="country"
        @click="goToCountry(country)"
      >
        {{ country.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionComponent",
  components: {},
  mounted() {},
  computed: {
    sectionId() {
      return this.$route.params.id;
    },
    section() {
      return this.$store.state.sections.find(
        (section) => section.id === this.sectionId
      );
    },
    countries() {
      return this.$store.state.countries.filter(
        (county) => county.mainland === this.sectionId
      );
    },
  },
  methods: {
    goToCountry(value) {
      this.$router.push(`/country/${value.value}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  margin: 1rem 0 1rem 0;
  width: 30rem;
}
.countries {
  display: flex;
  flex-wrap: wrap;
  .country {
    cursor: pointer;
    margin: 0 0.5rem 0.5rem;
  }
}
</style>