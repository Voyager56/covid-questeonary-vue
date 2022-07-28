<template>
  <div class="bg-black h-[100vh] flex justify-center items-center">
    <a href="/" class="text-5xl text-white tracking-widest">მადლობა</a>
    <img
      src="@/assets/images/Frame1.png"
      alt="star"
      class="absolute top-[400px] left-[800px]"
      width="40"
    />
    <img
      src="@/assets/images/Frame1.png"
      alt="star"
      class="absolute top-[550px] left-[1000px]"
      width="30"
    />
  </div>
</template>

<script>
export default {
  name: "CompleteForm",

  mounted() {
    let values = this.$store.getters.getData;
    this.$axios.post("/create", values).then((response) => {
      console.log(response);
    });
  },
};
</script>
