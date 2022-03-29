<template>

	<div>
		<div class="post">
			<div>
				<div>
					<strong>Name: </strong> {{post.title}}
				</div>
				<div>
					<strong>Text: </strong> {{post.text}}
				</div>
			</div>
			<div class="post__btns">
				<teal-button @click="$emit('remove', post)">Delete</teal-button>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		props: ['post']
	}
</script>

<style>
	.post {
		padding: 15px;
		border: 3px solid teal;
		margin-top: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>