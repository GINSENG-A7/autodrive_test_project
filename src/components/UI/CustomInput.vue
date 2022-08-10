<template>
	<input class="custom-input" 
	:type="inputType" 
	:placeholder="placeholderValue" 
	@input="updateInput" 
	:value="modelValue">
</template>

<script>
export default {
	name: "custom-input",
	props: {
		modelValue: [String, Number],
		id: {
			type: Number,
			required: true,
		},
		inputType: {
			type: String,
			default: "text",
		},
		placeholderValue: {
			type: String,
			default: "",
		}
	},
	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", { 
				id: this.id,
				value: event.target.value 
			});
		}
	},
}
</script>

<style lang="scss" scoped>
.custom-input {
	&::placeholder {
		line-height: normal; 
	}
}
</style>