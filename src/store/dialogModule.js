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
		},
		getResponse(state) {
			return state.response;
		},
	},
	mutations: {
		changeInputModelValue(state, { id, value }) {
			[...state.inputs].map(input => {
				if(input.id === id) {
					input.text = value;
				}
			})
			
			console.log(state.inputs);

		},
		setResponse(state, newResponse) {
			state.response = newResponse;
		},
	},
	actions: {
		async sendForm({state, commit, dispatch}, cityId) {
			let localResponse;
			try {
				console.log("fetching");
				localResponse = await axios.post("http://hh.autodrive-agency.ru/test-tasks/front/task-7/", {
					params: {
						name: state.inputs.find(({id}) => id === 1).text,
						phone: state.inputs.find(({id}) => id === 2).text.trim().replace(/[-/(/)/ ]/g, ''),
						email: state.inputs.find(({id}) => id === 3).text,
						// _city_id: this.$store.getters['aboutView/getCityes'].
						// filter(city => {
						// 	city.value === this.$store.getters['aboutView/getSelectedCityValue']
						// })[0].id,
						city_id: cityId,
					} 
				});
				commit("setResponse", localResponse.data);
			}
			catch(e) {
				console.log(e);
				commit("setResponse", e.response.data);
				console.log(state.response);
				// alert("Ошибка сервера");
			}
		},
	},
	namespaced: true,
}