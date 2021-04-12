<template>
	<component :is="$route.meta.navbar"></component>
	<router-view />
	<component :is="$route.meta.footer"></component>
</template>

<style lang="scss"></style>
