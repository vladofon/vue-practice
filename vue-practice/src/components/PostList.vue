<template>

	<div>
		<post-form :posts="posts" @create="createPost"></post-form>
		
		<div>
			<h5>Posts list</h5>
			<div v-for="post in posts">
				<post-row :post="post"></post-row>
			</div>
		</div>

	</div>

</template>

<script>
	import PostForm from './PostForm.vue'
	import PostRow from './PostRow.vue'
	
	export default {
		data() {
			return {
				posts: [],
			}
		},
		components: {
			PostForm,
			PostRow
		},
		methods: {
			createPost(post) {
				this.posts.push(post)
			}
		}
	}
</script>

<style>

</style>