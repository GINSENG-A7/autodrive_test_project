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
			[...state.inputs].filter(input => {
				if(input.id === id) {
					return true;
				}
				return false;
			})[0].text = value;

			console.log(state.inputs);
		}
	},
	actions: {
		async sendForm({state, commit, dispatch}) {
			try {
				const response = await axios.get("http://hh.autodrive-agency.ru/test-tasks/front/task-7/", {
					params: {
						_name: state.inputs.filter(input => {input.id === 1})[0].modelValue,
						_phone: state.inputs.filter(input => {input.id === 2})[0].modelValue,
						_email: state.inputs.filter(input => {input.id === 3})[0].modelValue,
						_city_id: this.$store.getters['aboutView/getCityes'].
						filter(city => {
							city.value === this.$store.getters['aboutView/getSelectedCityValue']
						})[0].id,
					} 
				});
				commit("response", response.data);
			}
			catch(e) {
				commit("setLoading", false);
				alert("Ошибка сервера");
			}
		},
	},
	namespaced: true,
}