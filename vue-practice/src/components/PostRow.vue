<template>

	<div>
		<div class="post">
			<div>
				<div>
					<strong>Name: </strong> {{post.title}}
				</div>
				<div>
					<strong>Text: </strong> {{post.body}}
				</div>
			</div>
			<div class="post__btns">
				<teal-button @click="$router.push(`/posts/${post.id}`)" class="btn__member">View</teal-button>
				<teal-button @click="$emit('remove', post)">Delete</teal-button>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		props: ['post'],
		emits: ['remove']
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
	.post__btns {
		display: flex;
		margin-left: 20px;
	}
	.btn__member {
		margin-right: 10px;
	}
</style>