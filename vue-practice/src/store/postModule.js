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

}