<template>
	<div class="page">
		<simple-header @dialogVisibility="showDialog"></simple-header>
		<custom-dialog :show="dialogIsVisible"></custom-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialogIsVisible: false,
		}
	},
	methods: {
		showDialog() {
			this.dialogIsVisible = true;
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
