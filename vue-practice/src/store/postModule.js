export default {
	namespaced: true,
	state: () => ({
		posts: [],
		isPostsLoading: false,
		page: 1,
		limit: 10,
		totalPages: 0,
		searchQuery: '',
		selectedSort: '',
	}),
	getters: {
		sortedPosts(state) {
			return [...state.posts].sort((a,b) => a[state.selectedSort]?.localeCompare(b[state.selectedSort]))
		},
		searchedAndSortedPosts(state, getters) {
			return getters.sortedPosts.filter(post => 
				post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
			)
		},
	},
	mutations: {
		setPosts(state, posts) {
			state.posts = posts
		},
		setPostsLoading(state, isPostsLoading) {
			state.isPostsLoading = isPostsLoading
		},
		setPage(state, page) {
			state.page = page
		},
		setTotalPages(state, totalPages) {
			state.totalPages = totalPages
		},
		setSearchQuery(state, searchQuery) {
			state.searchQuery = searchQuery
		},
		setSelectedSort(state, selectedSort) {
			state.selectedSort = selectedSort
		},
		
		createPost(state, post) {
			state.posts = [
				...state.posts,
				post
			]
		},
		removePost(state, post) {
			const index = state.posts.findIndex(item => item.id === post.id)
			
			state.posts = [
				...state.posts.slice(0, index),
				...state.posts.slice(index + 1)
			]
		}

	},
	actions: {
		async fetchPosts({state, commit}) {
			try {
				commit('setPostsLoading', true)
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
					params: {
						_page:  state.page,
						_limit: state.limit
					}
				})
				commit('setPosts', response.data)
				commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
			} catch (e) {
				console.log(e)
			} finally {
				commit('setPostsLoading', false)
			}
		},
		async loadNewPosts({state, commit}) {
			try {
				commit('setPage', state.page++)
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
					params: {
						_page:  state.page,
						_limit: state.limit
					}
				})
				commit('setPosts', [...this.posts, ...response.data])
			} catch (e) {
				console.log(e)
			}
		},
	}
}