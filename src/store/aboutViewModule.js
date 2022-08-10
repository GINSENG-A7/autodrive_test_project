export const aboutViewModule = {
	state: () => ({
		cityes: [
			{id: 1, value: "msk", name: "Москва"},
			{id: 2, value: "spb", name: "Санкт-Петербург"},
			{id: 3, value: "kzn", name: "Казань"},
		],
		selectedCityValue: "",
	}),
	getters: {
		getCityes(state) {
			return state.cityes;
		},
		getSelectedCityValue(state) {
			return state.selectedCityValue;
		},
		getSelectedCityId(state) {
			state.cityes.map(city => {
				console.log(city);
				if (city.value === state.selectedCityValue) {
					return city.id;
				}
				return null;
			});
		},
	},
	mutations: {
		setSelectedCityValue(state, cityValue) {
			state.selectedCityValue = cityValue;
			// console.log(state.selectedCityValue);
		},
	},
	actions: {
		// setSelectedCityValueAction({state, commit, dispatch}, value) {
		// 	commit("setSelectedCityValue", value);
		// 	console.log(value);
		// }

	},
	namespaced: true,
}