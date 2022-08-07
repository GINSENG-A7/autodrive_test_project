<template>
  <router-view></router-view>
</template>

<style lang="scss">
html {
	width: 100%;
	min-height: 100vh;
	body {
		min-width: 100%;
		min-height: 100%;
		margin: 0;
		padding: 0;
		* {
			font-family: 'Arial';
			font-style: normal;
			::selection {
				background: #999bf3;
			}
		}
	}
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 0;
	padding: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
