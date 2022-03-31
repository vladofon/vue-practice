<template>
	<div v-if="!isPostsLoading">
		<div v-if="posts.length > 0">
			<h4>Posts list</h4>
			<transition-group name="post-list">
				<div v-for="post in posts" :key="post.id">
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
	<div ref="observer" class="observer"></div>
</template>

<script>
	import PostForm from './PostForm.vue'
	import PostRow from './PostRow.vue'
	import axios from 'axios'
	
	export default {
		props: ['posts'],
		data() {
			return {
				isPostsLoading: false,
				page: 1,
				limit: 10,
				totalPages: 0,
			}
		},
		emits: ['remove'],
		components: {
			PostForm,
			PostRow
		},
		methods: {
			removePost(post) {
				this.$emit('remove', post)
			}
		},
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