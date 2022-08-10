import axios from 'axios'; 

export const dialogModule = {
	state: () => ({
		button: {id: 1, value: "Отправить", type: "text"},
		inputs: [
			{id: 1, title: "Имя*", placeholder: "Иван Иванов", type: "tel", regex: "dfgdfgdf", text: ""},
			{id: 2, title: "Телефон*", placeholder: "+7 (___) ___-__-__", type: "text", mask: '+7 (###) ###-##-##', text: ""},
			{id: 3, title: "Email*", placeholder: "you@example.com", type: "email", regex: "fdhfgsdh", text: ""},
		],
		response: "",
	}),
	getters: {
		getInputs(state) {
			return state.inputs;
		}
	},
	mutations: {
		changeInputModelValue(state, { id, value }) {
			[...state.inputs].map(input => {
				if(input.id === id) {
					input.text = value;
				}
			})
			
			console.log(state.inputs);

		}
	},
	actions: {
		async sendForm({state, commit, dispatch}, cityId) {
			try {
				console.log("fetching");
				const localResponse = await axios.get("http://hh.autodrive-agency.ru/test-tasks/front/task-7/", {
					params: {
						name: state.inputs.find(({id}) => id === 1).text,
						phone: state.inputs.find(({id}) => id === 2).text,
						email: state.inputs.find(({id}) => id === 3).text,
						// _city_id: this.$store.getters['aboutView/getCityes'].
						// filter(city => {
						// 	city.value === this.$store.getters['aboutView/getSelectedCityValue']
						// })[0].id,
						city_id: cityId,
					} 
				});
				commit("dialog/response", localResponse.data);
			}
			catch(e) {
				console.log(e);
				// alert("Ошибка сервера");
			}
		},
	},
	namespaced: true,
}