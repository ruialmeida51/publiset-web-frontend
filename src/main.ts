import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import FullscreenLoading from "vue-loading-overlay";

import "./assets/main.css";
import "vue-loading-overlay/dist/css/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.component("fullscren-loading", FullscreenLoading);

app.mount("#app");
