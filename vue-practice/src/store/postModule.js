export default {
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

	},
	
}