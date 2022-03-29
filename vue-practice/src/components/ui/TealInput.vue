<template>
	<input class="input" :value="value" @input="updateInput" type="text">
</template>

<script>
	export default {
		name: 'teal-input',
		props: ['value'],
		methods: {
			updateInput(event) {
				this.$emit('update:value', event.target.value)
			}
		}
	}
</script>

<style>
	.input {
		width: 100%;
		border: 1px solid teal;
		padding: 10px 15px;
	}
</style>