<template>
	<section class="year-container container-layout">
		<article class="year">
			<button
				type="button"
				class="year__number"
				:class="{ 'year__number--activ': index === aktivYear }"
				@click="setYearActive(index)"
				v-for="(year, index) in years"
				:key="index"
			>
				{{ year }}
			</button>
		</article>
		<article class="dropdown">
            <dropdown-menu :closeDropdown="closeDropdown"  @sortAlbums="sortAlbums"/>
			<!-- <button type="button" class="dropdown__button">asd</button> -->
		</article>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DropdownMenu from '@/common-components/Dropdown/AppDropdown.vue'

export default defineComponent({
	name: 'SearchNav',
	setup(props, context) {
		const years = ref(['2021', '2020', '2019', '2018', '2017', 'All'])
		const categorys = ref(['All Images', 'Albums', 'Trips'])

		const aktivYear = ref()
		function setYearActive(i: number) {
			aktivYear.value = i
		}

        const closeDropdown = ref(false)

        function sortAlbums(e: any){
            // console.log(e)
            context.emit("sortAlbums", e)
        }

		return { years, categorys, aktivYear, setYearActive, closeDropdown, sortAlbums }
	},
    
    emits: ["sortAlbums"],
    components: {
        DropdownMenu
    }
})
</script>

<style lang="scss" scoped>
@import '@/sass/components//utility/__utility.scss';

.year {
	height: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
    

	@media screen and (max-width: map-get( $breakpoints, medium)) {
		& {
			display: none;
		}
	}

	&-container {
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
	}

	&__number {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90px;
		height: 30px;
		border: 2px solid black;
		margin: 0 1rem 0 0;
		border-radius: 20px;
		font-size: 1.6rem;
		font-weight: 600;
        cursor: pointer;

		&:hover {
			color: white;
			background: black;
		}

		&--activ {
			color: white;
			background: black;
            cursor: default;
		}
	}
}
.dropdown{
    // height: 30px;
    max-width: 150px;

    &__button{
        height: 30px;
        min-width: 100px;
    }
}
</style>
