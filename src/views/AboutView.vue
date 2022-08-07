<template>
	<div class="page">
		<simple-header @dialogVisibilityShow="showDialog" @setNewSelection="setSelection"></simple-header>
		<custom-dialog v-model:show="dialogIsVisible" :dialogOptions="cityes" v-model:selection="selectedCityValue"></custom-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialogIsVisible: false,
			cityes: [
				{id: 1, value: "msk", name: "Москва"},
				{id: 2, value: "spb", name: "Санкт-Петербург"},
			],
			selectedCityValue: "",
		}
	},
	methods: {
		showDialog() {
			this.dialogIsVisible = true;
			console.log("major");
		},
		setSelection(value) {
			this.selectedCityValue = value;
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
