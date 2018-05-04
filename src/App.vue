<template>
	<div class="wrapper">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body,
html {
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
}
body {
	background: #101721;
	color: #ffffff;font-family: 'Open Sans', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 14px;
}
* {
	box-sizing: border-box;
}

.wrapper {
	padding:20px 20px 0;
}

h1, h2 {
  font-weight: normal;
	padding: 0;
	margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
