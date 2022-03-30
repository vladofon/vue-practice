<template>

	<h1>Main page</h1>
	<div class="app__btns">
		<div style="display: flex; justify-content: space-around;">
			<teal-input v-model:value="searchQuery" placeholder="Find" style="margin-right: 15px"/>
			<teal-button @click="showDialog" style="min-width: 110px">Create post</teal-button>
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
				<transition-group name="post-list">
					<div v-for="post in searchedAndSortedPosts" :key="post.id">
						<post-row :post="post" @remove="removePost"></post-row>
					</div>
				</transition-group>
			</div>
			<div v-else>
				<h4>There are no any post...</h4>
			</div>
		</div>
		<div v-else>
			<h4>Posts loading...</h4>
		</div>
	</div>
	<div ref="observer" class="observer"></div>
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
				searchQuery: '',
				selectedSort: '',
				page: 1,
				limit: 10,
				totalPages: 0,
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
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							_page: this.page,
							_limit:this.limit
						}
					})
					this.posts = response.data
					this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
				} catch (e) {
					alert('Fetch error')
				} finally {
					this.isPostsLoading = false
				}
			},
			async loadNewPosts() {
				try {
					this.page += 1
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							_page: this.page,
							_limit:this.limit
						}
					})
					this.posts = [...this.posts, ...response.data]
				} catch (e) {
					alert('Fetch error')
				}
			},
		},
		mounted() {
			this.fetchPosts()
			
			const options = {
			    rootMargin: '0px',
			    threshold: 1.0
			}
			const callback = (entries, observer) => {
			    if(entries[0].isIntersecting && this.posts.length < this.totalPages * this.limit) {
			    	this.loadNewPosts()
			    }
			};
			const observer = new IntersectionObserver(callback, options);
			observer.observe(this.$refs.observer)
			
		},
		computed: {
			sortedPosts() {
				return [...this.posts].sort((a,b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
			},
			searchedAndSortedPosts() {
				return this.sortedPosts.filter(post => 
					post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
				)
			}
		}
	}
</script>

<style scoped>

	.app__btns {
		display: flex;
		justify-content: space-between;
		margin: 15px 0px;
	}

	.post-list-enter-active,
	.post-list-leave-active {
	  transition: all 0.4s ease;
	}
	.post-list-enter-from,
	.post-list-leave-to {
	  opacity: 0;
	  transform: translateX(130px);
	}
	.post-list-move {
		transition: transform 0.4s ease;
	}
	
	.observer {
		
	}
	
</style>