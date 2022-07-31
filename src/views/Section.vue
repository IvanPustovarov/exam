<template>
  <div class="container" v-if="!isCountry">
    <h1>{{ section.name }}</h1>
    <div class="description-logo">
      <div class="description">
        <p>{{ section.description }}</p>
      </div>
      <div class="logo">
        <img :src="renderedSvg" alt="logo" />
      </div>
    </div>
    <div class="section">{{ section.name }}. Страны, города и места:</div>
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
  <router-view></router-view>
</template>

<script>
import eurasia from "@/assets/eurasia.svg";
import africa from "@/assets/africa.svg";
import antarctica from "@/assets/antarctica.svg";
import australia from "@/assets/australia.svg";
import islands from "@/assets/islands.svg";
import north_america from "@/assets/north_america.svg";
import south_america from "@/assets/south_america.svg";
export default {
  name: "SectionComponent",
  setup() {
    let earthProections = {
      eurasia,
      africa,
      antarctica,
      australia,
      islands,
      north_america,
      south_america,
    };
    return {
      earthProections,
    };
  },
  components: {},
  mounted() {
    this.renderedSvg = this.earthProections[this.sectionId];
  },
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
  watch: {
    sectionId(value) {
      this.renderedSvg = this.earthProections[value];
    },
  },
  data() {
    return {
      renderedSvg: null,
      isCountry: false,
    };
  },
  methods: {
    goToCountry(value) {
      this.isCountry = !this.isCountry;
      this.$router.push(`${this.$route.params.id}/${value.value}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.description-logo {
  display: flex;
  flex-direction: row;
  .description {
    margin: 1rem 5rem 1rem 1rem;
    width: 35rem;
    font-weight: 500;
    font-size: 18px;
    p {
      padding: 1rem;
      background-color: rgba(100, 117, 184, 0.5);
      border-radius: 5px;
    }
  }
  .logo {
    width: 25rem;
  }
}
.section {
  margin-bottom: 1rem;
  font-size: 18px;
}
.countries {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-radius: 5px;
  background-color: rgba(100, 117, 184, 0.5);
  padding: 0.2rem;
  .country {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 3px 3px 3px 3px;
    font-size: 18px;
    height: 1.3rem;

    &:hover {
      background-color: rgb(19, 43, 116);
    }
  }
}
</style>