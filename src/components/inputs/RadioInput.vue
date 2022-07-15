<template>
  <div class="flex flex-col items-start">
    <label class="w-[80vw] md:w-fit text-xl text-left">{{ name }}</label>
    <div id="radio-container" v-for="value of values" :key="value.name">
      <Field :type="value.type" :name="value.group" :rules="value.rules" :value="value.value"
        @change="updateStore(value.name, value.value)" class="border border-gray-500 p-2 ml-2" />
      <label class="pl-[10px] text-left">{{ value.text }}</label>
    </div>
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
  },
  components: {
    Field,
  },
};
</script>

<style>
input[type="radio"] {
  accent-color: #232323;
}

#radio-container {
  display: flex;
  align-items: center;
}
</style>
