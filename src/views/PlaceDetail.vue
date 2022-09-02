<template>
  <div class="container">
    <h1 class="name">{{ place.name }}</h1>
    <div class="details">
      <p class="main-info">
        "{{ place.name }}" находится в стране {{ countryName.name }}.
        {{ place.description }}
      </p>
      <div>
        <CustomSelect :options="options" @input="inputOption($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "@/components/CustomSelect.vue";
export default {
  name: "PlaceLocalComponent",
  props: {},
  components: { CustomSelect },
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
    options() {
      return [
        {
          text: `Дополнительная информация`,
          value: "",
        },
        {
          text:
            this.place.eastern && this.place.northern
              ? `${this.place.northern} св.ш, ${this.place.eastern} ю.д`
              : null,
          value: "",
        },
        {
          text: this.place.time ? `Часовой пояс ${this.place.time}` : null,
          value: "",
        },
        {
          text: this.place.area ? `Площадь: ${this.place.area}` : null,
          value: "",
        },
        {
          text: this.place.language ? `Язык: ${this.place.language}` : null,
          value: "",
        },
        {
          text: this.place.population
            ? `Население: ${this.place.population}`
            : null,
          value: "",
        },
      ];
    },
  },
  methods: {
    inputOption(option) {
      this.selected = option;
    },
  },
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