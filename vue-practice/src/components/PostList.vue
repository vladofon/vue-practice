<template>

	<div>
		<post-form :posts="posts"></post-form>
		<div class="post" v-for="post in posts">
			<post-row :post="post"></post-row>
		</div>
	</div>

</template>

<script>
	import PostForm from './PostForm.vue'
	import PostRow from './PostRow.vue'
	
	export default {
		data() {
			return {
				posts: [
					{id: 0, title: 'JavaScript post', description: 'universal programming language'},
					{id: 1, title: 'Java post', description: 'universal programming language'},
					{id: 2, title: 'C++ post', description: 'universal programming language'},
				],
			}
		},
		components: {
			PostForm,
			PostRow
		}
	}
</script>

<style>
	.post {
		padding: 15px;
		border: 3px solid teal;
		margin-top: 15px;
	}
</style>