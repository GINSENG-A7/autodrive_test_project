export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		hideDialog() {
			this.$emit('update:modelValue', false);
		}
	},
	mounted() {
		console.log(this.props.show);
	},
}