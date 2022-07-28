<template>
  <div class="flex">
    <div id="personal-info-form" class="ml-[20rem] mt-20 w-[30vw]">
      <Form @submit="onSubmit" ref="childForm" v-slot="{ meta }">
        <div class="flex flex-col items-start">
          <label class="font-bold text-2xl" for="name">სახელი*</label>
          <Field
            type="username"
            name="name"
            v-model="name"
            rules="required|min:3|max:225"
            class="border border-gray-500 w-[30rem] h-10 mt-2"
          />
          <ErrorMessage name="name" />
        </div>
        <div class="flex flex-col items-start mt-10">
          <div class="flex flex-col items-start">
            <label class="font-bold text-2xl" for="lastname">გვარი*</label>
            <Field
              type="username"
              name="lastname"
              v-model="lastname"
              rules="required|min:3|max:225"
              class="border border-gray-500 w-[30rem] h-10 mt-2"
            />
            <ErrorMessage name="lastname" />
          </div>
        </div>
        <div class="flex flex-col items-start mt-10">
          <label class="font-bold text-2xl" for="mail">მეილი*</label>
          <Field
            type="mail"
            name="mail"
            v-model="mail"
            rules="required|min:3|max:225|redberry_email"
            class="border border-gray-500 w-[30rem] h-10 mt-2"
          />
          <ErrorMessage name="mail" />
        </div>

        <div
          class="text-start mt-[10rem] text-gray-500 border-t-2 border-gray-500 w-fit pt-5"
        >
          *-ით მონიშნული ველების შევსება სავალდებულოა
        </div>
        <NavigationButtons
          @click="onSubmit"
          :prevPage="null"
          :nextPage="`covid-info`"
          :valid="meta.valid"
        />
      </Form>
    </div>
    <div id="image-container" class="relative">
      <img src="@/assets/images/twopeople.png" alt="main" width="600" />
      <img
        src="@/assets/images/mainlogo.png"
        alt="box"
        class="absolute top-[150px] opacity-50"
      />
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import NavigationButtons from "@/components/navigation/NavigationButtons.vue";
export default {
  components: {
    Field,
    ErrorMessage,
    Form,
    NavigationButtons,
  },
  name: "PersonalInfo",
  emits: ["save-errors"],
  data() {
    return {
      name: "",
      lastname: "",
      mail: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("setPersonalInfo", {
        name: this.name,
        lastname: this.lastname,
        mail: this.mail,
      });
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px;
}

@media (max-width: 780px) {
  #personal-info-form {
    margin-left: 0;
    padding: 0 1rem;
  }
  #image-container {
    display: none;
  }

  input {
    width: 23rem;
  }

  span {
    width: 400px;
    text-align: left;
    height: 0px;
  }
}
span {
  color: red;
}
</style>
