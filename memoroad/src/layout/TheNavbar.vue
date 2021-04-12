<template>
	<section id="nav">
		<nav class="nav">
			<router-link class="nav__logo-container" to="/">
				<img class="nav__logo" src="../assets/MemoRoadLogo.svg" alt="logo" />
			</router-link>

			<!-- <div class="nav__wrapper"> -->
			<div class="nav__link-container">
				<router-link class="nav__link" to="/">Home</router-link>
				<router-link class="nav__link" to="/about">Albums</router-link>
				<router-link class="nav__link" to="/about">Sign In</router-link>
			</div>
			<!-- </div> -->
		</nav>
	</section>
</template>

<style lang="scss" scoped>
#nav {
	display: flex;
	height: 60px;
	border-bottom: #bababa 1px solid;

	.nav {
		display: flex;
		align-items: center;
		margin: 0 auto;
		max-width: min(100% - 10rem);
		
		&__link-container {
			display: flex;
			width: 1000px;
			justify-content: flex-end;
		}
		&__link {
			margin-left: 40px;
			font-weight: 700;
			font-size: 1.6rem;
		}

		&__logo-container {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&__logo {
		}
	}
}
</style>
