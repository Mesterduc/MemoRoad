<template>
	<component :is="this.$route.meta.navbar || 'div'"></component>
		<router-view />
  <component :is="this.$route.meta.footer || 'div'"></component>
	
</template>

<style lang="scss">
</style>
