<template>
  <div class="flex">
    <div id="covidinfo-form" class="ml-[20rem] mt-20 w-[30vw]">
      <Form @submit.prevent="onSubmit" ref="childForm" v-slot="{ values }">
        <div class="flex flex-col items-start">
          <RadioInput
            :name="`გადატანილი გაქვთ კოვიდი?`"
            rule="required"
            :values="[
              {
                name: 'hadCovid',
                group: 'covid',
                type: 'radio',
                value: 'yes',
                text: 'კი',
              },
              {
                name: 'hadCovid',
                group: 'covid',
                type: 'radio',
                value: `no`,
                text: 'არა',
              },
              {
                name: 'hadCovid',
                group: 'covid',
                type: 'radio',
                value: `have_right_now`,
                text: 'ახლა მაქვს',
              },
            ]"
            v-on:change="
              () => {
                Object.keys(values).forEach((key) => {
                  if (key != 'covid') {
                    delete values[key];
                  }
                });
              }
            "
          />
          <RadioInput
            class="mt-5"
            :class="{ hidden: values.covid !== `yes` }"
            :name="`ანტისხეულების ტესტი გაქვს გაკეთებული?*`"
            rule="required"
            :values="[
              {
                name: 'hadTest',
                group: 'test',
                type: 'radio',
                value: true,
                text: 'კი',
              },
              {
                name: 'hadTest',
                group: 'test',
                type: 'radio',
                value: false,
                text: 'არა',
              },
            ]"
            v-on:change="
              () => {
                Object.keys(values).forEach((key) => {
                  if (key === 'covid' || key === 'test') {
                    return;
                  } else {
                    delete values[key];
                  }
                });
              }
            "
          />
          <div
            class="flex flex-col"
            :class="{
              hidden: values.test !== false || values.test,
            }"
          >
            <label class="w-max-[200px] text-left mt-5" for="covid-date"
              >მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
            </label>
            <input
              type="date"
              name="covid-date"
              v-model="values.covidDate"
              class="border border-gray-600 p-2 mt-2 w-[200px] ml-2"
            />
            <ErrorMessage name="covid-date" />
          </div>
          <div
            class="flex flex-col"
            :class="{ hidden: values.test === false || !values.test }"
          >
            <label class="w-max-[200px] text-left mt-5" for="covid-date"
              >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
              ანტისხეულების რაოდენობა*
            </label>
            <input
              type="date"
              name="test-date"
              v-model="values.testDate"
              placeholder="რიცხვი"
              class="border border-gray-600 p-2 mt-2 w-[200px] ml-2"
            />
            <Field
              type="number"
              name="antiBodies"
              v-model="values.antiBodies"
              placeholder="ანტისხეულების რაოდენობა"
              rules="required|min:3|max:225"
              class="border border-gray-500 w-[30rem] h-10 mt-2 ml-2 pl-2"
            />
            <ErrorMessage name="antibodies" />
          </div>
        </div>
        <NavigationButtons
          :valid="isValid(values)"
          :prevPage="`personal-info`"
          :nextPage="`vaccinated-info`"
          @click="onSubmit({ ...values })"
        />
      </Form>
    </div>
    <div id="image" class="relative">
      <img src="@/assets/images/vaccinate2.png" alt="fever" width="600" />
      <img
        src="@/assets/images/redcircle.png"
        alt="reddot"
        class="absolute top-[100px] opacity-50"
      />
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import NavigationButtons from "@/components/navigation/NavigationButtons.vue";
import RadioInput from "@/components/inputs/RadioInput.vue";
export default {
  name: "CovidInfo",
  components: {
    Form,
    Field,
    ErrorMessage,
    NavigationButtons,
    RadioInput,
  },
  data() {
    return {};
  },
  methods: {
    onSubmit(value) {
      this.$store.commit("setCovidInfo", value);
    },
    isValid: (values) => {
      return (
        (values.covid === `yes` && !values.test && values.covidDate) ||
        (values.covid === `yes` &&
          values.test &&
          values.testDate &&
          values.antiBodies &&
          values.antiBodies > 0) ||
        values.covid === `no` ||
        values.covid === `have_right_now`
      );
    },
  },
};
</script>

<style scoped>
@media (max-width: 780px) {
  #covidinfo-form {
    widows: fit-content;
    margin-left: 0;
    padding: 0 1rem;
  }

  #image {
    display: none;
  }
}
</style>
