<template>
  <header>
    <div class="header">
      <div class="logotype" @click="goToHome">
        <img src="@/assets/logo.png" alt="logo" class="logo" />
      </div>
      <router-link to="/" class="link"> Home </router-link>
      <div class="choose">
        <select v-model="selected">
          <option disabled value="">Выберите один из вариантов</option>
          <option value="eurasia">Евразия</option>
          <option value="islands">Острова и островные государства</option>
          <option value="africa">Африка</option>
          <option value="north-america">Северная Америка</option>
          <option value="antarctica">Антарктида</option>
          <option value="south-america">Южная Америка</option>
          <option value="australia">Австралия и океания</option>
        </select>
      </div>
      <!-- <router-link to="/places" class="link"> Places </router-link> -->
    </div>
  </header>
  <router-view />
  <footer><div class="footer">Footer</div></footer>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selected: "",
    };
  },
  async mounted() {
    this.$store.dispatch({
      type: "getPlaces",
    });
  },
  watch: {
    selected() {
      this.$router.push(`/sections/${this.selected}`);
    },
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
  computed: {},
};
</script>

<style lang="scss">
*,
*:after,
*:before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: 0.2s ease-in-out;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  outline: none;
}
img {
  display: block;
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  letter-spacing: 1px;
}
body {
  font-family: "Open Sans", arial, sans-serif;
  font-size: 14px;
  line-height: 1;
  color: #373737;
  background: #b49f9f;
}
img {
  width: 100%;
  max-width: 100%;
}
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  padding: 0 15px;
}

.header {
  display: flex;
  margin: 1rem;
  background-color: rgb(80, 106, 161);
  .logotype {
    width: 100px;
    cursor: pointer;
  }
  .link {
    font-size: 1.3rem;
    margin-left: 1rem;
    color: rgb(29, 29, 45);
  }
  .choose {
    select {
      width: 15rem;
    }
  }
}

.footer {
  margin: 1rem;
  display: flex;
}
</style>
