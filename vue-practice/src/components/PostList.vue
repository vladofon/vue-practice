<template>
	<h1>Main page</h1>
	<div>
		<dialog-window v-model:show="dialogVisible">
			<post-form :posts="posts" @create="createPost"></post-form>
		</dialog-window>
		<div>
			<teal-button @click="showDialog">Create post</teal-button>
		</div>
		<div v-if="posts.length > 0">
			<h4>Posts list</h4>
			<div v-for="post in posts" :key="post.id">
				<post-row :post="post" @remove="removePost"></post-row>
			</div>
		</div>
		<div v-else>
			<h4>There are no any post...</h4>
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
				dialogVisible: false
			}
		},
		components: {
			PostForm,
			PostRow
		},
		methods: {
			createPost(post) {
				this.posts.push(post)
				this.dialogVisible = false
			},
			removePost(post) {
				this.posts = this.posts.filter(item => item.id !== post.id)
			},
			showDialog() {
				this.dialogVisible = !this.dialogVisible
			}
		}
	}
</script>

<style>

</style>