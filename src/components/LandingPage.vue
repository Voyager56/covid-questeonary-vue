<template>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <div>
      <img src="@/assets/icons/rocket.svg" alt="asd" class="mb-5" />
    </div>
    <a href="/form/1/personal-info" class="font-bold text-xl leading-10"
      >კითხვარის დაწყება</a
    >
  </div>
</template>

<script>
export default {
  name: "LandingPage",

  data() {
    return {
      //
    };
  },
};
</script>

<style scoped>
img {
  animation: scale 1s;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

a {
  opacity: 0;
  font-size: 2.5rem;
  animation: show 1s ease-in normal;
  animation-delay: 1s;
  -webkit-animation-fill-mode: forwards;
}

@keyframes scale {
  0% {
    transform: scale(20);
    overflow: hidden;
    border-radius: 50%;
  }

  100% {
    transform: scale(1);
    border-radius: 50%;
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
