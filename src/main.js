import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/index.js";
import store from "@/store/index.js";
import "v-calendar/dist/style.css";
import VCalendar from "v-calendar";

let app = createApp(App);

app.use(VCalendar);

app.use(store).use(router);

app.mount("#app");
