<template>
	<div>
		<div>
			<strong>Name: </strong> {{post.title}}
		</div>
		<div>
			<strong>Text: </strong> {{post.description}}
		</div>
	</div>
</template>

<script>
	export default {
		props: ['post']
	}
</script>

<style>

</style>