<template>
  <router-view> </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "BPG-Arial";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "BPG-Arial";
  src: url("/src/assets/fonts/bpg_arial_2009.ttf");
}
</style>
