import { createApp } from "vue";
import App from "./App.vue";
import component from "./components/UI";
import router from "./router";
import store from "./store";
import { IApp } from "@/types/app";

const app = createApp(App);

component.forEach((component: IApp) =>
  app.component(component.name, component)
);

app.use(store).use(router).mount("#app");
