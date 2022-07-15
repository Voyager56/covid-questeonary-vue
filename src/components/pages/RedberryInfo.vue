<template>
  <div class="flex">
    <div id="redberry-info" class="ml-[20rem] mt-20 relative w-[30wv]">
      <Form
        @submit.prevent="onSubmit"
        ref="childForm"
        v-slot="{ values, meta }"
      >
        <div class="flex flex-col items-start">
          <p class="text-left">
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p class="mt-10 text-left">
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
          <RadioInput
            class="mt-10"
            :name="`რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*`"
            rule="required"
            :values="[
              {
                name: 'meetingFrequency',
                group: 'meetingFrequency',
                type: 'radio',
                value: 'twice_a_week',
                text: 'კვირაში ორჯერ',
                rules: 'required',
              },
              {
                name: 'meetingFrequency',
                group: 'meetingFrequency',
                type: 'radio',
                value: `once_a_week`,
                text: 'კვირაში ერთხელ',
                rules: 'required',
              },
              {
                name: 'meetingFrequency',
                group: 'meetingFrequency',
                type: 'radio',
                value: `once_in_a_two_weeks`,
                text: 'ორ კვირაში ერთხელ',
                rules: 'required',
              },
              {
                name: 'meetingFrequency',
                group: 'meetingFrequency',
                type: 'radio',
                value: `once_in_a_month`,
                text: 'თვეში ერთხელ',
                rules: 'required',
              },
            ]"
          />
          <RadioInput
            class="mt-10"
            :name="`კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*`"
            rule="required"
            :values="[
              {
                name: 'office',
                group: 'office',
                type: 'radio',
                value: `0`,
                text: '0',
                rules: 'required',
              },
              {
                name: 'office',
                group: 'office',
                type: 'radio',
                value: `1`,
                text: '1',
                rules: 'required',
              },
              {
                name: 'office',
                group: 'office',
                type: 'radio',
                value: `2`,
                text: '2',
                rules: 'required',
              },
              {
                name: 'office',
                group: 'office',
                type: 'radio',
                value: `3`,
                text: '3',
                rules: 'required',
              },
              {
                name: 'office',
                group: 'office',
                type: 'radio',
                value: `4`,
                text: '4',
                rules: 'required',
              },
              {
                name: 'office',
                group: 'office',
                type: 'radio',
                value: `5`,
                text: '5',
                rules: 'required',
              },
            ]"
          />
          <div class="flex flex-col">
            <label class="text-xl w-max-[200px] text-left mt-5" for="covid-date"
              >კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
            </label>
            <textarea
              type="textarea"
              name="meeting"
              v-model="values.meeting"
              rules="required|min:3"
              class="border border-gray-500 w-[30rem] h-[184px] mt-2 ml-2 pl-2"
            />
            <ErrorMessage name="meeting" />
          </div>
          <div class="flex flex-col">
            <label class="text-xl w-max-[200px] text-left mt-5" for="covid-date"
              >რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
              შეცვლიდი?
            </label>
            <textarea
              type="textarea"
              name="environment"
              v-model="values.environment"
              rules="required|min:3"
              class="border border-gray-500 w-[30rem] h-[184px] mt-2 ml-2 pl-2"
            />
            <ErrorMessage name="environment" />
          </div>
          <button
            :disabled="!meta.valid"
            @click="onSubmit({ ...values })"
            class="p-5 w-[150px] bg-blue-500 mt-10 rounded-xl text-white"
          >
            დასრულება
          </button>
          <NavigationButtons
            class="bottom-[-100px] left-[50%] lg:left-[90%]"
            :prevPage="`vaccinated-info`"
            :nextPage="``"
          />
        </div>
      </Form>
    </div>
    <div id="image" class="relative mx-[20rem]">
      <img
        src="@/assets/images/bike2.png"
        alt="biker"
        width="1500"
        class="mt-[60px]"
      />
      <img
        src="@/assets/images/heart.png"
        alt="heart"
        class="absolute top-[100px] left-[50px] opacity-50"
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
  name: "RedberryInfo",
  methods: {
    onSubmit(values) {
      this.$store.commit("setRedberryInfo", values);
      this.$router.push("/complete");
    },
  },
};
</script>

<style scoped>
@media (max-width: 780px) {
  #redberry-info {
    width: fit-content;
    margin-left: 0;
    padding: 0 1rem;
  }
  #image {
    display: none;
  }
  label,
  p {
    width: 90vw;
  }
  textarea {
    width: 300px;
  }
}
textarea {
  resize: none;
}
</style>
