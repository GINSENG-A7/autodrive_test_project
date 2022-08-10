<template>
	<div class="page">
		<simple-header @dialogVisibilityShow="showDialog" @setNewSelection="setSelection"></simple-header>
		<custom-dialog v-model:show="dialogIsVisible" :dialogOptions="cityes" :model-value="selectedCityValue"></custom-dialog>	
	</div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
	data() {
		return {
			dialogIsVisible: false,
			// cityes: [
			// 	{id: 1, value: "msk", name: "Москва"},
			// 	{id: 2, value: "spb", name: "Санкт-Петербург"},
			// 	{id: 3, value: "kzn", name: "Казань"},
			// ],
			// selectedCityValue: "",
		}
	},
	methods: {
		...mapMutations({
			setSelection: "aboutView/setSelectedCityValue",
		}),
		...mapActions({
			checkCity: "aboutView/checkCity",
		}),
		showDialog() {
			this.dialogIsVisible = true;
		},
		// setSelection(value) {
		// 	this.selectedCityValue = value;
		// }
	},
	computed: {
		...mapState ({
			cityes: state => state.aboutView.cityes,
			selectedCityValue: state => state.aboutView.selectedCityValue,
		}),
		...mapGetters ({
			
		}),
	}
}
</script>

<style lang="scss" scoped>

</style>
