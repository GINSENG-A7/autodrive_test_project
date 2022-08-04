<template>
	<div class="dialog__background" @click.stop="hideDialog">
		<div class="dialog__container">
			<h2>Заказать звонок</h2>
			<div class="grid_wrapper">
				<div class="grid_item">
					<p class="label">Имя</p>
					<custom-input class="custom-element"></custom-input>
				</div>
				<div class="grid_item">
					<p class="label">Телефон</p>
					<custom-input class="custom-element"></custom-input>
				</div>
				<div class="grid_item">			
					<p class="label">Email</p>		
					<custom-input class="custom-element"></custom-input>
				</div>
				<div class="grid_item">
					<p class="label">Город</p>
					<custom-select class="custom-element"></custom-select>
				</div>

				<custom-button class="btn" :buttonObject="this.button"></custom-button>
			</div>
		</div>
	</div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
	name: "custom-dialog",
	data() {
		return {
			button: {id: 1, value: "Отправить", type: "Text"},
		}
	},
	mixins: [toggleMixin],
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
		min-width: 300px;
		padding: 10px;
		h2 {
			margin: 23px 0;
		}
		.grid_wrapper {
			display: grid;
			grid-template-columns: 170px 170px 170px 170px;
			grid-template-rows: 62px 62px;
			column-gap: 18px;
			row-gap: 20px;
			justify-content: center;
			.grid_item {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;
				* {
					width: 100%;
					height: 100%;
					box-sizing: border-box;	
				}
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
@media only screen and (min-width: 744px) {
	.dialog__container {
		min-width: 793px;
	}
}
@media only screen and (max-width: 744px) {
	.dialog__container {
		min-width: 793px;
	}
}
@media only screen and (max-width: 375px) {
	.dialog__container {
		min-width: 355px;
	}
}
</style>