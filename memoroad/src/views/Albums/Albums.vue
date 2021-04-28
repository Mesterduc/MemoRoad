<template>
	<main class="albums main-layout">
		<h1 class="albums__header container-layout">Albums</h1>
		<search-nav />

		<section class="album-container">
			<article class="album">
				<header class="album__text--header">sabbat år</header>
				<p class="album__text"><span class="bold">Continent: </span> asd</p>
				<p class="album__text"><span class="bold">Countries: </span>sabbat år</p>
				<span class="album__text"><span class="bold">City: </span>sabbat år</span>
				<div class="album__text--date-container">
					<span class="album__text--date"> <span class="bold">From: </span>10-2-2020 </span>
					<span class="album__text--date"> <span class="bold">To: </span>23-2-2020 </span>
				</div>
        <img src="@/assets/icon/arrow-right.svg" alt="arrow" class="album__arrow">
			</article>
			<article class="album">
				<span class="album__title">sabbat år</span>
				<span class="album__city">sabbat år</span>
				<span class="album__countries">sabbat år</span>
				<span class="album__continent">sabbat år</span>
			</article>
		</section>
	</main>
</template>
<script>
import { defineComponent } from 'vue'
import SearchNav from './components/SearchNav/SearchNav.vue'

export default defineComponent({
	name: 'Albums',
	components: {
		SearchNav,
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

	&__text {
		text-transform: capitalize;
    margin: 0.5rem 0;

		&--header {
			font-size: 3.2rem;
			font-weight: bold;

			&::first-letter {
				text-transform: uppercase;
			}
		}
		&--date-container {
			position: absolute;
			right: 2rem;
			bottom: 2rem;
		}
    &--date{
      margin-left: 1.5rem;
    }
	}

  &__arrow{
    height: 40px;
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
  }
}
</style>
