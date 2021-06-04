<template>
	<main class="albums main-layout">
		<h1 class="albums__header container-layout">Albums</h1>
		<search-nav @sortAlbums="hej" />

		<app-album :hej2="hej2"/>
	</main>
</template>
<script>
import { defineComponent, ref } from 'vue'
import SearchNav from './components/SearchNav/SearchNav.vue'
import AppAlbum from './components/Album/AppAlbum.vue'

export default defineComponent({
	name: 'Albums',
	components: {
		SearchNav,
    AppAlbum
	},
  setup() {
  const hej2 = ref("asdoooo")

    function hej(e){
      hej2.value = e
      // console.log(e.value)
      // console.log(hej2.value)
      return e

    }
    return {hej,  hej2}

  },
  props:{
        hej: {
            type: String
        }
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
