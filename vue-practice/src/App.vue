<template>

	<div class="app">
		<form @submit.prevent>
			<h4>Create post</h4>
			<input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="Enter post title">
			<input v-bind:value="text" @input="text = $event.target.value" class="input" type="text" placeholder="Enter post text...">
			<button class="btn" @click="createPost">save</button>
		</form>
		<div class="post" v-for="item in posts">
			<div>
				<strong>Name: </strong> {{item.title}}
			</div>
			<div>
				<strong>Text: </strong> {{item.description}}
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				posts: [
					{id: 0, title: 'JavaScript post', description: 'universal programming language'},
					{id: 1, title: 'Java post', description: 'universal programming language'},
					{id: 2, title: 'C++ post', description: 'universal programming language'},
				],
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
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	.app {
		padding: 15px;
	}
	
	form {
		display: flex;
		flex-direction: column;
	}
	
	.post {
		padding: 15px;
		border: 3px solid teal;
		margin-top: 15px;
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