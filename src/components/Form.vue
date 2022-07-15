<template>
  <div
    id="form-header"
    class="flex justify-between items-center mx-[20rem] mt-10 border-b-[2px] border-black pb-5 relative"
  >
    <img src="@/assets/icons/redberry.svg" alt="redberry logo" />
    <h1 class="text-xl">{{ getPageNumber() }}/4</h1>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="id" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getPageNumber() {
      return this.$store.getters.getPage;
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  #form-header {
    margin-left: 0;
    width: 100%;
    padding: 0 1rem;
  }
}

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
