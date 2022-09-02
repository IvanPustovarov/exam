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
  <footer><div class="footer"></div></footer>
</template>

<script>
import CustomSelect from "@/components/CustomSelect.vue";
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
      if (this.selected != null) {
        this.$router.push(`/sections/${this.selected}`);
      }
    },
  },
  methods: {
    goToHome() {
      this.selected = null;
      this.$router.push("/");
    },
    inputOption(option) {
      this.selected = option;
    },
  },
  computed: {
    options() {
      return this.$store.state.optionsContinents;
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Coves";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: local("Coves"), url("./fonts/Coves/Coves-Bold.otf") format("otf"),
    url("./fonts/Coves/Coves-Light.otf") format("otf");
}
*,
*:after,
*:before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: 0.2s ease-in-out;
  font-family: "Coves";
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
  font-size: 16px;
  line-height: 1;
  color: #d5d4d4;
  background: linear-gradient(to right, #2b5876, #4e4376);
  display: flex;
  flex-direction: column;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
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
