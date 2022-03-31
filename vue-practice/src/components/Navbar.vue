<template>
	<div class="navbar">
		<h3 @click="$router.push('/')" class="logo">Postmaker</h3>
		<div class="navbar__btns">
			<teal-button @click="$router.push('/posts')" style="margin-right: 8px">Posts</teal-button>
			<teal-button @click="$router.push('/about')">About</teal-button>
		</div>
	</div>
</template>

<script>

</script>

<style>
	.navbar {
		height: 50px;
		box-shadow: 2px 4px 10px teal;
		display: flex;
		padding: 0px 15px;
		align-items: center;
	}
	.navbar__btns {
		margin-left: auto;
	}
	.logo {
		cursor: pointer;
	}
</style>