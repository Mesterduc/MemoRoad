<template>
	<!-- <h1>{{ sortAlbums }}</h1>
	<h1>asd</h1> -->
	<h1 @click="mad2">{{ hej2 }}</h1>
	<section class="album-container">
		<article class="album" v-for="album in albums" :key="album.id" @click="mad">
			<header class="album__text album__text--header">{{ album.title }}</header>
			<p class="album__text"><span class="bold">Continent: </span> {{ arrayToSting(album.continent) }}</p>
			<p class="album__text"><span class="bold">Countries: </span>{{ arrayToSting(album.countries) }}</p>
			<span class="album__text"><span class="bold">City: </span>{{ arrayToSting(album.city) }}</span>
			<div class="album__text--date-container">
				<span class="album__text album__text--date">
					<span class="bold">From: </span>{{ album.date.start }}
				</span>
				<span class="album__text--date"> <span class="bold">To: </span>{{ album.date.end }}</span>
			</div>
			<img src="@/assets/icon/arrow-right.svg" alt="arrow" class="album__arrow" />
		</article>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import AlbumType from '../../../../types/AlbumType'

export default defineComponent({
    name: "AppAlbum",
    props: ["hej2"],
	setup(props) {
		const albums = ref<AlbumType[]>([])
		const asd = ref("")
		const error = ref(null)
        console.log(props.hej2)
        asd.value = props.hej2
        function mad() {

               oldestAlbums.value
            
        }
        function mad2() {

                newestAlbums.value
            
        }
    watch(() => props.hej2, (cur, old) => {
        if(cur == "oldest"){
			console.log(cur)
           return oldestAlbums.value
        }
        if(cur == "latest"){
			console.log(cur)
          return  newestAlbums.value
        }
        load()
    })

		const load = async () => {
			try {
				let data = await fetch('../../test.json')
				if (!data.ok) {
					throw Error('no data available')
				}

				albums.value = await data.json().then((data) => data.journey)
				
			} catch (err) {
				error.value = err.message
			}
		}
		load()

		function arrayToSting(arr: Array<String>) {
			if (arr.length > 3) {
				return arr.join(', ') + '...'
			}
			return arr.join(', ')
		}

		const newestAlbums = computed(() => {
            // find ud af hvordan typescript fungere
            // todo: giv ordenlig typer
			let lol:  any = albums.value.sort((a: any, b: any): number => {
				// let mad: any = new Date(a.date.start)
				let mad: any = a.id
				// let mad2: any = new Date(b.date.start)
				let mad2: any = b.id
				return mad2 - mad
			})
			console.log(lol)
			return lol
			// return albums.value.sort((a: any, b: any): number => {
			// 	// let mad: any = new Date(a.date.start)
			// 	let mad: any = a.title
			// 	// let mad2: any = new Date(b.date.start)
			// 	let mad2: any = b.title
			// 	return mad2 - mad
			// })
		})
		// const oldestAlbums = computed(() => {
        //     // find ud af hvordan typescript fungere
        //     // todo: giv ordenlig typer
		// 	return albums.value.sort((a: any, b: any): number => {
		// 		let mad: any = new Date(a.date.start)
		// 		let mad2: any = new Date(b.date.start)
		// 		return mad-mad2
		// 	})
		// })
		const oldestAlbums = computed(() => {
            // find ud af hvordan typescript fungere
            // todo: giv ordenlig typer
			return albums.value.sort((a: any, b: any): number => {
				let mad: any = a.id
				let mad2: any = b.id
				return mad-mad2
			})
		})
        function yearAlbums(year: number) {
            return "asd"
        }

		return { albums, arrayToSting, newestAlbums, oldestAlbums, yearAlbums, mad, mad2, asd }
	},
})
</script>

<style lang="scss" scoped>
.album {
	&-container {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		flex-direction: column;
		margin-top: 1rem;
	}

	border: 2px solid black;
	padding: 2rem;
	border-radius: 15px;
	margin-bottom: 10px;
	position: relative;
	cursor: pointer;

	&__text {
		text-transform: capitalize;
		margin: 0.5rem 0;

		&--header {
			font-size: 3.2rem;
			font-weight: bold;
			margin-bottom: 2rem;
			text-transform: none;

			&::first-letter {
				text-transform: uppercase;
			}
		}
		&--date-container {
			position: absolute;
			right: 2rem;
			bottom: 2rem;
		}
		&--date {
			margin-left: 1.5rem;
		}
	}

	&__arrow {
		height: 40px;
		position: absolute;
		top: 50%;
		right: 2rem;
		transform: translateY(-50%);
	}
}
</style>
