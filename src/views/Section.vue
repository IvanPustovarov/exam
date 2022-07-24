<template>
  <div class="container">
    <h1>{{ section.name }}</h1>
    <p class="description">{{ section.description }}</p>
    <div>Страны относящиеся к {{ section.name }}:</div>
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
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.description {
  margin: 1rem 0 1rem 0;
  width: 30rem;
}
</style>