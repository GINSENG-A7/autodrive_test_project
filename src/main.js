import { createApp } from 'vue';
import App from './App.vue';
import uis from "@/components/UI";
import components from "@/components";
import router from "@/router/index";
import Maska from 'maska';
// import Vuelidate from 'vuelidate';
import store from "@/store";

const app = createApp(App);

uis.forEach(ui => {
	app.component(ui.name, ui)
});

components.forEach(component => {
	app.component(component.name, component)
});

app.use(router)
.use(Maska)
// .use(Vuelidate)
.use(store)
.mount('#app');