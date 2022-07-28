<template>
  <div class="flex">
    <div id="vaccinate-info" class="ml-[20rem] mt-20 w-[30vw]">
      <Form @submit.prevent="onSubmit" ref="childForm" v-slot="{ values }">
        <div class="flex flex-col items-start">
          <RadioInput
            :name="`უკვე აცრილი ხარ?`"
            rule="required"
            :values="[
              {
                name: 'vaccinated',
                group: 'vaccinated',
                type: 'radio',
                value: true,
                text: 'კი',
                rules: 'required',
              },
              {
                name: 'vaccinated',
                group: 'vaccinated',
                type: 'radio',
                value: false,
                text: 'არა',
                rules: 'required',
              },
            ]"
            v-on:change="
              () => {
                Object.keys(values).forEach((key) => {
                  if (key != 'vaccinated') {
                    delete values[key];
                  }
                });
              }
            "
          />
        </div>
        <div
          class="flex flex-col items-start mt-10"
          :class="{ hidden: !values.vaccinated }"
        >
          <RadioInput
            :name="`აირჩიე რა ეტაპზე ხარ`"
            rule="required"
            :values="[
              {
                name: 'stage',
                group: 'stage',
                type: 'radio',
                value: 'first_dosage_and_registered_on_the_second',
                rules: `required|${values.vaccinated ? 'required' : 'null'}`,
                text: 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე',
              },
              {
                name: 'stage',
                group: 'stage',
                type: 'radio',
                value: `fully_vaccinated`,
                rules: `required|${values.vaccinated ? 'required' : 'null'}`,
                text: 'სრულად აცრილი ვარ',
              },
              {
                name: 'stage',
                group: 'stage',
                type: 'radio',
                value: `first_dosage_and_not_registered_yet`,
                rules: `required|${values.vaccinated ? 'required' : 'null'}`,
                text: 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე',
              },
            ]"
            v-on:change="
              () => {
                Object.keys(values).forEach((key) => {
                  if (key === 'stage' || key === 'vaccinated') {
                    return;
                  } else {
                    delete values[key];
                  }
                });
              }
            "
          />
          <div
            class="text-black w-[250px] mt-10"
            :class="{ hidden: values.stage !== `firstDose` }"
          >
            რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
            <a class="text-blue-400" href="https://booking.moh.gov.ge/"
              >https://booking.moh.gov.ge/</a
            >
          </div>
        </div>
        <div
          class="flex flex-col items-start mt-10"
          :class="{
            hidden: values.vaccinated !== false || values.vaccinated,
          }"
        >
          <RadioInput
            :name="`რას ელოდები?`"
            :values="[
              {
                name: 'waitingFor',
                group: 'waitingFor',
                type: 'radio',
                value: 'registered_and_waiting',
                rules: `required|${values.vaccinated ? 'required' : 'null'}`,
                text: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
              },
              {
                name: 'waitingFor',
                group: 'waitingFor',
                type: 'radio',
                value: `not_planning`,
                rules: `required|${values.vaccinated ? 'required' : 'null'}`,
                text: 'არ ვგეგმავ',
              },
              {
                name: 'waitingFor',
                group: 'waitingFor',
                type: 'radio',
                value: `had_covid_and_planning_to_be_vaccinated`,
                rules: `required|${values.vaccinated ? 'required' : 'null'}`,
                text: 'გადატანილი მაქვს და ვგეგმავ აცრას',
              },
            ]"
          />
          <div
            class="text-black w-[250px] mt-10"
            :class="{
              hidden: values.waitingFor !== `registered_and_waiting`,
            }"
          >
            ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
            ვაქცინის გაკეთება.👉 რეგისტრაციის ბმული
            <a class="text-blue-400" href="https://booking.moh.gov.ge/"
              >https://booking.moh.gov.ge/</a
            >
          </div>
          <div
            class="text-black w-[250px] mt-10"
            :class="{ hidden: values.waitingFor !== `not_planning` }"
          >
            👉 რეგისტრაციის ბმული
            <a class="text-blue-400" href="https://booking.moh.gov.ge/"
              >https://booking.moh.gov.ge/</a
            >
          </div>
        </div>

        <NavigationButtons
          @click="onSubmit({ ...values })"
          :prevPage="`covid-info`"
          :nextPage="`redberry-info`"
          :valid="
            values.vaccinated === false ? values.waitingFor : values.stage
          "
        />
      </Form>
    </div>
    <div id="image" class="relative">
      <img src="@/assets/images/doctor.png" alt="doctor" width="600" />
      <img
        src="@/assets/images/star.png"
        alt="star"
        class="absolute left-[30px] opacity-50 top-0"
        width="200"
      />
    </div>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import NavigationButtons from "@/components/navigation/NavigationButtons.vue";
import RadioInput from "@/components/inputs/RadioInput.vue";
export default {
  components: {
    Form,
    NavigationButtons,
    RadioInput,
  },
  name: "VaccinatedInfo",
  methods: {
    onSubmit(values) {
      this.$store.commit("setVaccinatedInfo", values);
    },
  },
};
</script>

<style>
@media (max-width: 780px) {
  #vaccinate-info {
    width: fit-content;
    margin-left: 0;
    padding: 0 1rem;
  }
  #image {
    display: none;
  }
  input[type="number"] {
    width: 300px;
  }
}
</style>
