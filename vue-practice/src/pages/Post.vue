<template>

	<div class="container">
		<div class="header">
			<h2>Title</h2>
		</div>
		<div class="content">
			<p class="content__text">
				Here might be your text. Wait for the server response :(
			</p>
			<div class="bottom">
				<h4>Post ID: {{$route.params.id}}</h4>
			</div>
		</div>
	</div>
	
</template>

<script>
	
	export default {

	}
	
</script>

<style scoped>
	.container {
		padding: 20px;
		margin: 0 auto;
		margin-top: 200px;
		max-width: 500px;
		border: 3px solid teal;
	}
	.header {
		text-align: center;
		margin-bottom: 20px;
	}
	.content__text {
		margin-bottom: 20px;
	}
	.bottom {
		text-align: right;
	}
</style>