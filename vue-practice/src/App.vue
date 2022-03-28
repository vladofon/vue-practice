<template>

	<div class="app">
		<post-list></post-list>
	</div>

</template>

<script>
	import PostList from './components/PostList.vue'
	
	export default {
		components: {
			PostList
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

</style>