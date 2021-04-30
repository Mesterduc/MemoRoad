<template>
	<main class="albums main-layout">
		<h1 class="albums__header container-layout">Albums</h1>
		<search-nav />

		<app-album />
	</main>
</template>
<script>
import { defineComponent } from 'vue'
import SearchNav from './components/SearchNav/SearchNav.vue'
import AppAlbum from './components/Album/AppAlbum.vue'

export default defineComponent({
	name: 'Albums',
	components: {
		SearchNav,
    AppAlbum
	},
})
</script>

<style lang="scss" scoped>
.albums {
	&__header {
		font-size: 2.4rem;
		font-weight: 800;
		margin: 2rem 0 2rem 0;
		display: block;
	}
}

</style>
