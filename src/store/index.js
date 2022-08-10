import { createStore } from "vuex";
import { dialogModule } from "@/store/dialogModule";
import { aboutViewModule } from "@/store/aboutViewModule";

export default createStore({
	modules: {
		dialog: dialogModule,
		aboutView: aboutViewModule,
	},
});