<template>
  <div class="container">
    <h1 class="name">{{ place.name }}</h1>
    <div class="details">
      <p class="main-info">
        "{{ place.name }}" находится в стране {{ countryName.name }}.
        {{ place.description }}
      </p>
      <div class="side-info">
        <div v-if="place.eastern && place.northern" class="coords">
          Найти это место можно по координатам
          <span>{{ place.northern }}</span>
          св.ш и <span>{{ place.eastern }}</span> юж.д
        </div>
        <div>
          Часовой пояс: <span>{{ place.time }}</span>
        </div>
        <div v-if="place.area">
          Площадь: <span>{{ place.area }}</span>
        </div>
        <div v-if="place.language">
          Язык: <span>{{ place.language }}</span>
        </div>
        <div v-if="place.population">
          Население: <span>{{ place.population }}</span>
        </div>
      </div>
    </div>
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
    countryName() {
      return this.$store.state.countries.find(
        (country) => country.value === this.place.country
      );
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.name {
  margin: 0 0 1rem 1rem;
}

.details {
  display: flex;
  flex-direction: column;
  .main-info {
    font-size: 20px;
    margin-bottom: 1rem;
  }
  .side-info {
    width: 19rem;
    padding: 0.5rem;
    border-radius: 3px;
    background-color: rgb(37, 61, 92);
    .coords {
      margin-bottom: 0.3rem;
    }
    span {
      margin: 0.3rem;
      background-color: rgb(22, 22, 76);
      border-radius: 2px;
    }
  }
}
</style>