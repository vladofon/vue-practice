<template>

	<form @submit.prevent>
		<h4>Create post</h4>
		<teal-input v-focus class="form-member" v-model:value="post.title" placeholder="Enter post title" />
		<teal-input class="form-member" v-model:value="post.body" placeholder="Enter post text..." />
		<teal-button class="form-member submit" @click="createPost">save</teal-button>
	</form>
	
</template>

<script>
	export default {
		data() {
			return {
				post: {
					title: '',
					body: '',
				}
			}
		},
		emits: ['create'],
		methods: {
			createPost() {
				this.post.id = Date.now()
				
				this.$emit('create', this.post)
				
				this.post = {
					title: '',
					body: ''
				}
			}
		}
	}
</script>

<style scoped>
	form {
		display: flex;
		flex-direction: column;
	}
	.form-member {
		margin-top: 15px;
	}
	.submit {
		align-self: flex-end;
	}
</style>