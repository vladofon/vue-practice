<template>
	<h1>Main page</h1>
	<div>
		<dialog-window v-model:show="dialogVisible">
			<post-form @create="createPost"></post-form>
		</dialog-window>
		<div style="margin: 15px 0px">
			<teal-button @click="fetchPosts">Load data</teal-button>
			<teal-button @click="showDialog">Create post</teal-button>
		</div>
		<div v-if="!isPostsLoading">
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
		<div>
			<h4>Posts loading...</h4>
		</div>
	</div>

</template>

<script>
	import PostForm from './PostForm.vue'
	import PostRow from './PostRow.vue'
	import axios from 'axios'
	
	export default {
		data() {
			return {
				posts: [],
				dialogVisible: false,
				isPostsLoading: false
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
			},
			async fetchPosts() {
				try {
					this.isPostsLoading = true
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
					this.posts = response.data
				} catch (e) {
					alert('Fetch error')
				} finally {
					this.isPostsLoading = false
				}
			}
		},
		mounted() {
			this.fetchPosts()
		}
	}
</script>

<style>

</style>