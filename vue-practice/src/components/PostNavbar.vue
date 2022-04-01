<template>
	<div class="app__btns">
		<div class="nav-inputs">
			<teal-input v-focus v-model:value="searchQuery" placeholder="Find" class="nav-input-left"/>
			<teal-button @click="showDialog" class="nav-input-right">Create post</teal-button>
		</div>
		<teal-select v-model="selectedSort" :options="sortOptions"/>
		<dialog-window v-model:show="dialogVisible">
			<post-form @create="createPost"></post-form>
		</dialog-window>
	</div>
</template>

<script>
	import PostForm from '@/components/PostForm.vue'
	
	export default {
		components: { PostForm },
		data() {
			return {
				dialogVisible: false,
				searchQuery: '',
				selectedSort: '',
				sortOptions: [
					{value: 'title', name: 'By title'},
					{value: 'body', name: 'By description'},
				]
			}
		},
		emits: ['create', 'sort', 'search'],
		methods: {
			showDialog() {
				this.dialogVisible = !this.dialogVisible
			},
			createPost(post) {
				this.$emit('create', post)
				this.dialogVisible = false
			}
		},
		watch: {
			selectedSort(newVal){
				this.$emit('sort', this.selectedSort)
			},
			searchQuery(newVal) {
				this.$emit('search', this.searchQuery)
			}
		}
	}
</script>

<style>
	.nav-inputs {
		display: flex; 
		justify-content: space-around;
	}
	
	.nav-input-left {
		max-width: 300px;
		margin-right: 15px
	}
	.nav-input-right {
		min-width: 110px
	}
</style>