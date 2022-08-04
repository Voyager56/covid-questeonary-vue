import { createRouter, createWebHistory } from "vue-router";

import Form from "@/components/Form.vue";
import LandingPage from "@/components/LandingPage.vue";
import PersonalInfo from "@/components/pages/PersonalInfo.vue";
import CovidInfo from "@/components/pages/CovidInfo.vue";
import VaccinatedInfo from "@/components/pages/VaccinatedInfo.vue";
import RedberryInfo from "@/components/pages/RedberryInfo.vue";
import CompleteForm from "@/components/pages/CompleteForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/form",
      component: Form,
      children: [
        {
          path: "1/personal-info",
          component: PersonalInfo,
        },
        {
          path: "2/covid-info",
          component: CovidInfo,
        },
        {
          path: "3/vaccinated-info",
          component: VaccinatedInfo,
        },
        {
          path: "4/redberry-info",
          component: RedberryInfo,
        },
      ],
    },
    { path: "/", component: LandingPage },
    { path: "/complete", component: CompleteForm },
  ],
});

export default router;
