<template>
	<div v-if="show" class="dialog" @click.stop="hideDialog">
		<div @click.stop class="dialog__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import toggleMixin from '@/mixins/toggleMixin'

	export default {
		name: 'dialog-window',
		props: ['show'],
		mixins: [toggleMixin]
	}
</script>

<style>
	.dialog {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
		position: fixed;
		display: flex;
	}
	.dialog__content {
		margin: auto;
		background: white;
		padding: 20px;
		border-radius: 15px;
		min-width:300px;
		min-height: 50px;
	}
</style>