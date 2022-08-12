<template>
	<div class="popup__background" v-if="show === true" @click.stop="hideDialog">
		<div class="popup__container" @click.stop>
			<div class="slot">
				<slot></slot>
			</div>
			<button class="btn" @click="hideDialog">OK</button>
		</div>
	</div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';
import CustomButton from './UI/CustomButton.vue';

export default {
  components: { CustomButton },
	name: "popup",
	mixins: [toggleMixin],
}
</script>

<style lang="scss" scoped>
.popup__background {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.493);
	position: fixed;
	display: flex;
	z-index: 2;
	.popup__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		width: 80%;
		margin: auto;
		background: white;
		border-radius: 8px;
		min-height: 216px;
		// min-width: 300px;
		padding: 10px;
		.slot {
			flex-grow: 2;
			width: 100%;
			margin-bottom: 5px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}	
		.btn {
			width: 100%;
			height: 38px;
			transition: ease 0.4s;
			border-radius: 6px;
			border: none;
			color: #FFF;
			background-color: #ce4100;
			grid-column: 4;
			&:hover {
				cursor: pointer;
			}
			&:active {
				background-color: #a83500;
			}
		}
	}
}
</style>