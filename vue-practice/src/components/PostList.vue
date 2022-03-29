<template>

	<div>
		<post-form :posts="posts" @create="createPost"></post-form>
		
		<div>
			<h5>Posts list</h5>
			<div v-for="post in posts" :key="post.id">
				<post-row :post="post" @remove="removePost"></post-row>
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
			},
			removePost(post) {
				this.posts = this.posts.filter(item => item.id !== post.id)
			}
		}
	}
</script>

<style>

</style>