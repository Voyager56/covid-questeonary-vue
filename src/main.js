import { createApp } from "vue";
import App from "@/App.vue";
import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";
import "@/assets/tailwind.css";
import store from "@/store/index";
import router from "@/router/index";
import instance from "@/config/axios/index";

router.beforeEach((to) => {
  if (
    to.fullPath.startsWith("/form") &&
    store.state.pageNumber === 1 &&
    !(to.fullPath === "/form/personal-info")
  ) {
    return router.push("/");
  }
});

const app = createApp(App).use(store).use(router);
app.config.globalProperties.$axios = { ...instance };
app.mount("#app");
