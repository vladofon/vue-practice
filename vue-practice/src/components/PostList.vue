<template>
	<h1>Main page</h1>
	<div class="app__btns">
		<div style="margin: 15px 0px">
			<teal-button @click="showDialog">Create post</teal-button>
		</div>
		<teal-select v-model="selectedSort" :options="sortOptions"/>
	</div>
	<div>
		<dialog-window v-model:show="dialogVisible">
			<post-form @create="createPost"></post-form>
		</dialog-window>

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
		<div v-else>
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
				isPostsLoading: false,
				selectedSort: '',
				sortOptions: [
					{value: 'title', name: 'By title'},
					{value: 'body', name: 'By description'},
				]
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
	.app__btns {
		display: flex;
		justify-content: space-between;
	}
</style>