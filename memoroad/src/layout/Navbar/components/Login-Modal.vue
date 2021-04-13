<template>
	<teleport to="#nav"><div class="modal" @click="sendtest"></div></teleport>
</template>

<script lang="ts">
import { defineComponent, ref, setDevtoolsHook } from 'vue'

export default defineComponent({
	name: 'Login-Modal',
	components: {},
	props: [''],
	emits: ['sendtest', 'sendtest'],
	setup(props, context) {
		function sendtest() {
			context.emit('sendtest')
		}
		return { sendtest }
	},
})
</script>

<style lang="scss" scoped>
.modal {
	position: absolute;
	background: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100vh;
}
</style>
