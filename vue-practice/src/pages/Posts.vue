<template>

	<h1>Main page</h1>
	
	<post-navbar 
		@create="createPost" 
		@search="searchPost"
		@sort="sortPosts">
	</post-navbar>
	
	<post-list 
		@remove="removePost" 
		:posts="searchedAndSortedPosts">
	</post-list>
	
	<div v-intersection="loadNewPosts" class="observer"></div>
	
</template>

<script>
	import PostNavbar from '@/components/PostNavbar.vue'
	import PostList from '@/components/PostList.vue'
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
	
	export default {
		components: { PostNavbar, PostList },
		methods: {
			...mapMutations({
				createPost: 'post/createPost',
				removePost: 'post/removePost',
				searchPost: 'post/setSearchQuery',
				sortPosts:  'post/setSelectedSort',
			}),
			...mapActions({
				fetchPosts: 'post/fetchPosts',
				loadNewPosts: 'post/loadNewPosts',
			}),
		},
		computed: {
			...mapGetters({
				sortedPosts: 'post/sortedPosts',
				searchedAndSortedPosts: 'post/searchedAndSortedPosts',
			})
		},
		mounted() {
			this.fetchPosts()
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