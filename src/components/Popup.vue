<template>
	<div class="popup__container">
		<slot>

		</slot>
		
	</div>
</template>

<script>
export default {
	name: "popup",
}
</script>

<style lang="scss" scoped>
.popup__container {
	position: absolute;
	width: 100%;
	height: 100%;
}
</style>