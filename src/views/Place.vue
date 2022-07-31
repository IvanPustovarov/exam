<template>
  <div class="place">
    <div class="description">{{ place.description }}</div>
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
  name: "PlaceComponent",
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
  outline: 1px solid white;
  border-radius: 2px;
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
  .description {
    outline: 1px solid white;
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    border-radius: 3px;
    overflow-y: scroll;
    overflow-x: hidden;
    font-size: 18px;
    margin: 0;
    background: linear-gradient(to right, #445f71, #1c356a);
    color: rgb(255, 255, 255);
    z-index: 1;
    -webkit-transition: height 0.5s, background-color 0.5s,
      -webkit-transform 0.5s;
    transition: height 0.5s, background-color 0.5s, transform 0.5s;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &:hover {
    outline: none;
    .description {
      width: 20rem;
      height: 12rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
}
</style>