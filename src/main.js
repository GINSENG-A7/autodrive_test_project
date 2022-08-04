import { createApp } from 'vue';
import App from './App.vue';
import uis from "@/components/UI";
import components from "@/components";
import router from "@/router/index";

const app = createApp(App);

uis.forEach(ui => {
	app.component(ui.name, ui)
});

components.forEach(component => {
	app.component(component.name, component)
});

app.use(router).mount('#app');