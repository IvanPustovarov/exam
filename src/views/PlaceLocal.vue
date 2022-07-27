<template>
  <div class="place">
    <div class="picture">
      <img :src="place.picture" alt="" />
    </div>
    <div class="info">
      <h3>{{ place.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceLocalComponent",
  props: {
    place: {
      type: Object,
      default: null,
    },
  },
  components: {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.place {
  cursor: pointer;
  outline: 2px solid white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem 0 1rem 1rem;
  position: relative;
  .picture {
    width: 20rem;
    max-width: 100%;
    height: 12rem;
    overflow: hidden;
  }
  .info {
    background-color: rgba(41, 48, 48, 0.5);
    position: absolute;
    padding: 10px;
    bottom: 1rem;
    left: 1rem;
    border-radius: 2px;
    font-size: 20px;
    color: rgb(255, 255, 255);
    font-weight: 900;
  }
}
</style>