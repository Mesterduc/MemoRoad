<template>
	<main class="albums main-layout">
		<h1 class="albums__header container-layout">Albums</h1>
		<article class="year container-layout">
			<button type="button" class="year__number">2021</button>
			<button type="button" class="year__number year__number--activ">2020</button>
			<button type="button" class="year__number">2019</button>
			<button type="button" class="year__number">2018</button>
			<button type="button" class="year__number">2017</button>
			<button type="button" class="year__number ">2016</button>
		</article>
		<article class="album container-layout"></article>
	</main>
</template>

<style lang="scss" scoped>
.albums {
	&__header {
		font-size: 2.4rem;
		font-weight: 800;
		margin: 2rem 0 2rem 0;
		display: block;
	}
}
.year {
	height: 40px;
	display: flex;
  align-items: center;

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

    &--activ{
      color: white;
      background: black;
    }
	}
}
</style>
