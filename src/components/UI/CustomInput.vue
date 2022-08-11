<template>
	<input class="custom-input" 
	:type="inputType" 
	:placeholder="placeholderValue" 
	@input="updateInput" 
	:value="modelValue">
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { helpers } from 'vuelidate/lib/validators'

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

	// setup () {
    // 	return { v$: useVuelidate() }
    // },

	// validations () {
	// 	const textRegex = helpers.regex(/^[a-zа-яё ,.'-]{2,}$/iu);
	// 	const emailRegex = helpers.regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

	// 	const localRules = {
	// 		modelValue: { required }
	// 	}
	// 	if (this.inputType == "text") {
	// 		localRules.modelValue = {
	// 			required, textRegex
	// 		}
	// 	}
	// 	else if (this.inputType == "email") {
	// 		localRules.modelValue = {
	// 			required, emailRegex
	// 		}
	// 	}
	// 	return localRules
	// },
}
</script>

<style lang="scss" scoped>
.custom-input {
	&::placeholder {
		line-height: normal; 
	}
}
</style>