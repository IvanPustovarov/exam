<template>
  <div class="container">
    <h1>The most attractive places in the world</h1>
    <p class="description">
      Этот сайт - для тех, кто мечтает объехать весь мир. Для тех, кто не может
      представить жизнь без путешествий.
    </p>
    <p class="description">
      На этой странице вас ждут самые необычные, удивительные, красивые -
      словом, те места нашей планеты, которые обязательно нужно увидеть хотя бы
      раз в своей жизни. Увлекательные тексты помогут вам отправиться в
      путешествие по миру, а красочные фотографии - почувствовать атмосферу
      каждого из 1000 лучших мест нашей планеты.
    </p>
    <p class="description">
      Все места удобно сгруппированы по континентам и странам - вы сможете с
      легкостью спланировать свой отпуск. Отправьтесь в незабываемое
      путешествие!
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  mounted() {},
  computed: {
    places() {
      return this.$store.state.places;
    },
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    goToEmployee(place) {
      this.$router.push(`/employees/${place.id - 1}`);
    },
  },
};
</script>

<style scored lang="scss">
.description {
  width: 35rem;
  font-size: 18px;
  margin: 1rem 0 0 1rem;
}
</style>
