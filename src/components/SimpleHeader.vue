<template>
	<div class="header">
		<div class="btns__wrapper">
			<custom-button class="btn" v-for="button in buttonsContent" :key="button.id" :buttonObject="button" @click="showDialog(); setSelection(button.linkValue)"></custom-button>
		</div>
	</div>
</template>

<script>
export default {
	name: "simple-header",
	data() {
		return {
			buttonsContent: [
                { id: 1, value: "Заказать в Москву", type: "Text", linkValue: "msk" },
                { id: 2, value: "Заказать в Санкт-Петербург", type: "Text", linkValue: "spb" },
            ],
		};
	},
	methods: {
		showDialog() {
			this.$emit('dialogVisibilityShow');
		},
		setSelection(buttonLinkValue) {
			// this.$emit('setNewSelection', buttonLinkValue);
			this.$store.commit('aboutView/setSelectedCityValue', buttonLinkValue);
		},
	}
}
</script>

<style lang="scss" scoped>
.header {
	box-sizing: border-box;
	width: 100%;
	padding: 0 10%;
	.btns__wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin: 10px auto;
		.btn {
			transition: ease 0.4s;
			&:first-child {
				background-color: #2e81ee;
				margin-right: 20px;
				&:hover {
					cursor: pointer;
				}
				&:active {
					background-color: #225ca8;
				}
			}
			&:nth-child(2) {
				background-color: #00b31e;
				&:hover {
					cursor: pointer;
				}
				&:active {
					background-color: #007914;
				}
			}
		}
	}
}
@media only screen and (min-width: 744px) {
	.btns__wrapper {
		flex-wrap: nowrap;
	}
}
@media only screen and (max-width: 744px) {

}
@media only screen and (max-width: 375px) {
	.btns__wrapper {
		height: max-content;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex-wrap: wrap;
		.btn {
			margin: 5px 0 !important;
			width: 100%;
		}
	}
}

</style>