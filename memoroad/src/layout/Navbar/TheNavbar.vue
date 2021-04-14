<template>
<login-modal v-if="showModal" @sendtest="sendtest" />
	<section id="nav">
		<nav class="nav">
			<router-link class="nav__logo-container" to="/">
				<img class="nav__logo" src="@/assets/MemoRoadLogo.svg" alt="logo" />
			</router-link>

			<div class="nav__link-container">
				<router-link class="nav__link" to="/">Home</router-link>
				<router-link class="nav__link" to="/about">Albums</router-link>
				<!-- <router-link class="nav__link" to="/about">Sign In</router-link> -->
				<button type="button" class="nav__link--logo" @click="showModal = !showModal">Sign In</button>
			</div>
		</nav>
	</section>
	
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginModal from './components/Login-Modal.vue'

export default defineComponent({
	name: 'TheNavbar',
	components: {
		LoginModal
	},
	setup(context) {
		const showModal = ref(false)

		function sendtest(){
			showModal.value = false
		}

		return { showModal, sendtest }
	},
})
</script>

<style lang="scss" scoped>
#nav {
	display: flex;
	height: 60px;
	border-bottom: #bababa 1px solid;

	.nav {
		display: flex;
		align-items: center;
		margin: 0 auto;
		// changes the width of the navbar
		max-width: min(100% - 10rem);

		&__link-container {
			display: flex;
			width: 1000px;
			justify-content: flex-end;
			align-items: center;
		}
		&__link {
			margin-left: 40px;
			font-weight: 700;
			font-size: 1.6rem;

			&--logo {
				border: none;
				background: black;
				font-size: 1.6rem;
				font-weight: 600;
				margin-left: 40px;
				color: white;
				padding: 5px 20px;
				border-radius: 10px;

				&:hover {
					background: #333;
				}
			}
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
