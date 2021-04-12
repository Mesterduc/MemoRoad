<template>
	<section id="nav">
		<router-link class="nav__logo-link" to="/">
			<img class="nav__logo" src="../assets/MemoRoadLogo.svg" alt="logo" />
		</router-link>

		<article class="nav">
			<!-- <div class="nav__wrapper"> -->
				<router-link class="nav__link" to="/">Home</router-link>
				<router-link class="nav__link" to="/about">Albums</router-link>
				<router-link class="nav__link" to="/about">Sign In</router-link>
			<!-- </div> -->
		</article>
	</section>
</template>

<style lang="scss" scoped>
#nav {
	display: flex;

	.nav {
		display: inline-flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;

		&__link {
			margin-left: 40px;
		}
	}
}
</style>
