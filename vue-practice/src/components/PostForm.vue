<template>

	<form @submit.prevent>
		<h4>Create post</h4>
		<input v-model="post.title" class="input" type="text" placeholder="Enter post title">
		<input v-model="post.text" class="input" type="text" placeholder="Enter post text...">
		<button class="btn" @click="createPost">save</button>
	</form>
	
</template>

<script>
	export default {
		data() {
			return {
				post: {
					title: '',
					text: '',
				}
			}
		},
		methods: {
			createPost() {
				this.post.id = Date.now()
				
				this.$emit('create', this.post)
				
				this.post = {
					title: '',
					text: ''
				}
			}
		}
	}
</script>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
	
	.input {
		width: 100%;
		border: 1px solid teal;
		padding: 10px 15px;
		margin-top: 15px;
	}
	
	.btn {
		align-self: flex-end;
		margin-top: 15px;
		padding: 10px 15px;
		background: none;
		border: 1px solid teal;
	}
</style>