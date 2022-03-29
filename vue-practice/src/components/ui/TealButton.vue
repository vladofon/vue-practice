<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'teal-button'
	}
</script>

<style>
	.btn {
		padding: 10px 15px;
		background: none;
		border: 1px solid teal;
	}
</style>