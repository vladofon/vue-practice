<template>

	<div class="app">
		<navbar />
		<div class="container">
		
			<router-view></router-view>
			
		</div>
	</div>

</template>

<script>
	import PostList from '@/components/PostList.vue'
	import Navbar from '@/components/Navbar.vue'
	
	export default {
		components: {
			PostList,
			Navbar
		},
		data() {
			return {
				
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
	
	.container {
		padding: 15px;
	}

</style>