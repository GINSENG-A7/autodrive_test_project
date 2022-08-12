import axios from 'axios'; 

export const dialogModule = {
	state: () => ({
		button: {id: 1, value: "Отправить", type: "text"},
		inputs: [
			{id: 1, title: "Имя*", placeholder: "Иван Иванов", type: "text", regex: /^[a-zа-яё ,.'-]{2,}$/iu, text: ""},
			{id: 2, title: "Телефон*", placeholder: "+7 (___) ___-__-__", type: "tel", mask: '+7 (###) ###-##-##', text: ""},
			{id: 3, title: "Email*", placeholder: "you@example.com", type: "email", regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, text: ""},
		],
		response: "",
		countOfRequests: 0,
	}),
	
	getters: {
		getInputs(state) {
			return state.inputs;
		},
		getResponse(state) {
			return state.response;
		},
		getCountOfRequests(state) {
			return state.countOfRequests;
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

		},
		setResponse(state, newResponse) {
			state.response = newResponse;
			state.popupIsVisible = !state.popupIsVisible;
		},
	},
	actions: {
		async sendForm({state, rootState, commit, dispatch}, payload) {
			// const validationResult = await this.v$.$validate();
			// if (validationResult === false) {
			// 	return
			// }

			rootState.aboutView.popupIsVisible = true;
			console.log(rootState.aboutView.popupIsVisible);

			await axios.post("http://hh.autodrive-agency.ru/test-tasks/front/task-7/", {
				name: state.inputs.find(({id}) => id === 1).text,
				phone: state.inputs.find(({id}) => id === 2).text.trim().replace(/[-/(/)/ ]/g, ''),  
				email: state.inputs.find(({id}) => id === 3).text,
				city_id: payload.id,
			})
			.then((result) => {
				state.response = result.data;
				state.countOfRequests++;
				state.inputs.map(input => input.text = "");
				console.log(state.response);
			})
			.catch((result)=> {
				state.response = result.message;
				state.countOfRequests++;
				console.log(state.response);
			})
		},
	},
	namespaced: true,
}