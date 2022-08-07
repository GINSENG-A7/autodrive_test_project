<template>
	<input class="custom-input" :type="inputType" :placeholder="placeholderValue">
</template>

<script>
export default {
	name: "custom-input",
	props: {
		inputType: {
			type: String,
			default: "text",
		},
		placeholderValue: {
			type: String,
			default: "",
		}
	}
}
</script>

<style lang="scss" scoped>
.custom-input {
	&::placeholder {
		line-height: normal; 
	}
}
</style>