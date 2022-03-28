<template>

	<form @submit.prevent>
		<h4>Create post</h4>
		<input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="Enter post title">
		<input v-bind:value="text" @input="text = $event.target.value" class="input" type="text" placeholder="Enter post text...">
		<button class="btn" @click="createPost">save</button>
	</form>
	
</template>

<script>
	export default {
		props: ['posts'],
		data() {
			return {
				title: '',
				text: ''
			}
		},
		methods: {
			createPost() {
				const post = {
					id: Date.now(),
					title: this.title,
					description: this.text,
				}
				
				this.posts.push(post)
				
				this.title = ''
				this.text = ''
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