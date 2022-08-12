<template>
	<form class="dialog__background" v-if="show === true" @click.stop="hideDialog">
		<div class="dialog__container" @click.stop>
			<h2>Заказать звонок</h2>
			<div class="grid_wrapper">
				<div class="grid_item" v-for="(input, i) in getInputs" :key="i">
					<p class="label">{{input.title}}</p>
					<custom-input class="custom-element" 
						v-if="input?.mask" 
						:id="input.id" 
						:inputType="input.type" 
						:placeholderValue="input.placeholder" 
						:model-value="input.text" 
						@update:model-value="changeInputModelValue"
						v-maska="input.mask">
					</custom-input>
					<custom-input class="custom-element" 
						v-else 
						:id="input.id" 
						:inputType="input.type" 
						:placeholderValue="input.placeholder" 
						:model-value="input.text" 
						@update:model-value="changeInputModelValue">
					</custom-input>
				</div>
				<div class="grid_item select_wrapper">
					<p class="label">Город*</p>
					<custom-select class="custom-element" :model-value="this.$store.getters['aboutView/getSelectedCityValue']" @update:model-value="setNewSelectionToParent" :options="this.$store.getters['aboutView/getCityes']"></custom-select>
				</div>

				<custom-button class="btn" :buttonObject="this.button" @click.prevent.stop="sendForm(this.$store.getters['aboutView/getSelectedCityId']), hideDialog()"></custom-button>
			</div>
			<!-- <popup v-if="visibility === true">
				<div v-html="getResponse"></div>
			</popup> -->
		</div>
	</form>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";
import axios from 'axios';
// import Popup from './Popup.vue';
// import useVuelidate from '@vuelidate/core'
// import { required, email } from '@vuelidate/validators'

export default {
    name: "custom-dialog",

    data() {
        return {
            selectedCityValue: "",
            selectedCityId: "",
            dialogOptions: [],
			// nameRegex: /^[a-zа-яё ,.'-]{2,}$/iu ,
			// emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ,
        };
    },
    mixins: [toggleMixin],
    // beforeUpdate() {
    //     this.dialogOptions = this.$store.getters["aboutView/getCityes"];
    //     this.selectedCityValue = this.$store.getters["aboutView/getSelectedCityValue"];
    //     this.selectedCityId = this.$store.getters["aboutView/getSelectedCityId"];
    //     console.log(this.selectedCityValue);
    //     console.log(this.selectedCityId);
    // },


	// created() {
	// 	this.unwatch = this.$store.watch(
	// 	(state, getters) => state.popupIsVisible,
	// 	(newValue, oldValue) => {
	// 		console.log(newValue);
	// 	},);
	// },
	// beforeDestroy() {
	// 	this.unwatch();
	// },

    methods: {
        setNewSelectionToParent(targetValue) {
            this.$store.commit("aboutView/setSelectedCityValue", targetValue);
        },
        ...mapMutations({
            changeInputModelValue: "dialog/changeInputModelValue",
        }),
        ...mapActions({
            sendForm: "dialog/sendForm",
        }),
    },
    computed: {
        ...mapState({
            button: state => state.dialog.button,
            inputs: state => state.dialog.inputs,
            response: state => state.dialog.response,
        }),
        ...mapGetters({
            getInputs: "dialog/getInputs",
            getResponse: "dialog/getResponse",
        }),
		// visibility: {
		// 	get () {
		// 		return this.$store.getters['aboutView/getPopupVisibility']
		// 	},
		// 	set (value) {
		// 		this.$store.commit('aboutView/setPopupVisibility', value)
		// 	},
		// }
    },
	// watch: {
	// 	response(newValue) {
	// 		console.log(this.visibility);
	// 		this.visibility = true;
	// 	}
	// },
}
</script>

<style lang="scss" scoped>
.dialog__background {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.493);
	position: fixed;
	display: flex;
	z-index: 2;
	.dialog__container {
		box-sizing: border-box;
		width: 793px;
		margin: auto;
		background: white;
		border-radius: 8px;
		min-height: 216px;
		// min-width: 300px;
		padding: 10px;
		h2 {
			margin: 23px 0;
			width: max-content;
			text-align: left;
			margin-left: 20px;
		}
		.grid_wrapper {
			display: grid;
			grid-template-columns: 170px 170px 170px 170px;
			grid-template-rows: 62px 62px;
			column-gap: 18px;
			row-gap: 20px;
			justify-content: center;
			width: 100%;
    		margin: 0 auto;
			.grid_item {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;
				* {
					width: 100%;
					height: 100%;
					box-sizing: border-box;
					font-weight: 400;
					font-size: 16px;
					line-height: 20px;
				}
			}
			.select_wrapper {
				
			}
			.btn {
				height: 38px;
				transition: ease 0.4s;
				border-radius: 6px;
				background-color: #00b31e;
				grid-column: 4;
				&:hover {
					cursor: pointer;
				}
				&:active {
					background-color: #007914;
				}
			}
			.label {
				margin: 0;
				width: max-content;
				height: auto;
				margin-left: 4px;
				font-size: 16px;
			}
			.custom-element {
				height: 38px;
				border-radius: 6px;
				border-color: #D1D5DB;
				border-style: double;
				padding-left: 13px;
				&:focus {
					border-color: #5791e7 !important;
					outline-color: #5791e7;
				}
			}
		}
	}
	h3 {
		text-align: center;
	}
	.btn {
		width: 100%;
		border-end-end-radius: 12px;
		border-end-start-radius: 12px;
	}
}
@media only screen and (max-width: 1440px) {
	.dialog__container {
		width: 669px !important;
		min-height: 254px !important;
		.grid_wrapper {
			grid-template-columns: 190px 190px 190px !important;
			.grid_item{
				&:first-of-type {
					grid-column: 2 !important;
					grid-row: 1 !important;
				}
				&:nth-of-type(2) {
					grid-column: 1 !important;
					grid-row: 1 !important;
				}
				&:nth-of-type(3) {
					grid-column: 0 !important;
					grid-row: 1 !important;
				}
			}
		}
		.btn {
			grid-column: 3 !important;
			align-self: end !important;
		}
		.select_wrapper {
			grid-column: 1/3 !important;
		}
	}
}
@media only screen and (max-width: 744px) {
	.dialog__container {
		width: 355px !important;
		min-height: 472px !important;
		.grid_wrapper {
			grid-template-columns: 315px !important;
			grid-template-rows: repeat(62px) !important;
			* {
				grid-column: auto !important;
				grid-row: auto !important;
			}
			.grid_item{
				&:first-of-type {
					grid-column: 1 !important;
					grid-row: 2 !important;
				}
				&:nth-of-type(2) {
					grid-column: 1 !important;
					grid-row: 1 !important;
				}
				&:nth-of-type(3) {
					grid-column: 1 !important;
					grid-row: 3 !important;
				}
			}
		}
		.btn {
			// grid-column: 3 !important;
			align-self: end !important;
		}
		.select_wrapper {
			// grid-column: 1/3 !important;
		}
	}
}
</style>