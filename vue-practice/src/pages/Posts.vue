<template>

	<h1>Main page</h1>
	<post-navbar @create="createPost" @sort="sortPosts" @search="searchPosts"/>
	<post-list @remove="removePost" :posts="searchedAndSortedPosts"/>
	<div ref="observer" class="observer"></div>
	
</template>

<script>
	import PostNavbar from '@/components/PostNavbar.vue'
	import PostList from '@/components/PostList.vue'
	import axios from 'axios'
	
	export default {
		components: { PostNavbar, PostList },
		data() {
			return {
				posts: [],
				isPostsLoading: false,
				page: 1,
				limit: 10,
				totalPages: 0,
				searchQuery: '',
				selectedSort: '',
			}
		},
		methods: {
			createPost(post) {
				this.posts.push(post)
			},
			removePost(post) {
				this.posts = this.posts.filter(item => item.id !== post.id)
			},
			sortPosts(sort) {
				this.selectedSort = sort
			},
			searchPosts(query) {
				this.searchQuery = query
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
			this.fetchPosts();
			
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