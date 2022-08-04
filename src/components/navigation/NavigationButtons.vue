<template>
  <div class="absolute left-[50%] -translate-x-[50%] mt-20 bottom-0">
    <button
      :disabled="!prevPage"
      id="prevButton"
      class="text-4xl pr-5"
      @click="goToPreviousPage"
    >
      &lt;
    </button>
    <button
      :disabled="!valid"
      id="nextButton"
      class="text-4xl"
      @click="goToNextPage"
    >
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "NavigationButtons",
  props: {
    valid: {
      type: Boolean,
      default: false,
    },
    prevPage: {
      type: String,
      required: true,
    },
    nextPage: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToPreviousPage() {
      this.$router.push(this.prevPage);
    },
    goToNextPage() {
      this.$router.push(this.nextPage);
    },
  },
};
</script>

<style>
button:disabled,
button[disabled] {
  color: #ccc;
}
</style>
