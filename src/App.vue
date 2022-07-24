<template>
  <header>
    <div class="header">
      <div class="logotype" @click="goToHome">
        <img src="@/assets/logo.png" alt="logo" class="logo" />
      </div>
      <div class="select">
        <CustomSelect :options="options" @input="inputOption($event)" />
      </div>
    </div>
  </header>
  <router-view />
  <footer><div class="footer">Footer</div></footer>
</template>

<script>
import CustomSelect from "./components/CustomSelect.vue";
export default {
  components: {
    CustomSelect,
  },
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
    inputOption(option) {
      this.selected = option;
    },
  },
  computed: {
    options() {
      return this.$store.state.options;
    },
  },
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
  background: linear-gradient(rgb(134, 134, 175), rgb(187, 205, 166));
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  .logotype {
    width: 100px;
    cursor: pointer;
  }
  .link {
    font-size: 1.3rem;
    margin-left: 1rem;
    color: rgb(29, 29, 45);
  }
  .select {
    margin: 2rem 0 0 1rem;
  }
}

.footer {
  margin: 1rem;
  display: flex;
}
</style>
