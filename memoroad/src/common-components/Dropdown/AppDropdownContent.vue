<template>
<transition name="fade">
	<div v-if="sharedState" class="test">
		<slot />
	</div>
</transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AppDropdownContent',
    props: ['sharedState'],
	setup() {},
})
</script>

<style lang="scss" scoped>
.test{
    position: absolute;
    top: 30px;
    left: 0;
    width: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
