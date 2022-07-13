<template>
  <router-view />
</template>

<script>
export default {
  components: {},
  async mounted() {
    const response = await fetch(
      "https://629915c87b866a90ec368b06.mockapi.io/api/employee",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );
    console.log(await response.json());
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
  background: #f7f7f7;
}
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  padding: 0 15px;
}
</style>
