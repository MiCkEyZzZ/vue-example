import { createApp } from "vue";
import App from "./App.vue";
import component from "./components/UI";
import router from "./router";
import store from "./store";

const app = createApp(App);

component.forEach((component) => app.component(component.name, component));

app.use(store).use(router).mount("#app");
