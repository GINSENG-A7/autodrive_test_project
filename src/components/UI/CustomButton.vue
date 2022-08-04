<template>
	<button class="custom-button">
		<p>{{ buttonObject.value }}</p>
	</button>
</template>

<script>
export default {
	name: "custom-button",
	props: {
		buttonObject: Object,
	}
}
</script>

<style lang="scss" scoped>
.custom-button {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	border: none;
	background-color: lightskyblue;
	width: max-content;
	height: auto;
	color: #FFF;
	font-size: 16px;
	font-weight: 500;
	p {
		margin: 8px 20px;
	}
}
</style>