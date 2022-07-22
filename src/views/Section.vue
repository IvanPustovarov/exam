<template>
  <div class="container">{{ sectionId }}</div>
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