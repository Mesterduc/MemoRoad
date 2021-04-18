<template>
	<modal-sign-in v-if="showModal" @sendtest="sendtest" />
	<modal-forgot-password />
	<modal-create-account />
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

			<nav class="nav__burgermenu" >
				
			</nav>
		</nav>
	</section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import ModalCreateAccount from './components/ModalCreateAccount.vue'
import ModalForgotPassword from './components/ModalForgotPassword.vue'
import ModalSignIn from './components/ModalSignIn.vue'

export default defineComponent({
	name: 'TheNavbar',
	components: {
		ModalSignIn,
		ModalForgotPassword,
		ModalCreateAccount,
	},
	setup(context) {
		const showModal = ref(false)

		function sendtest() {
			showModal.value = false
		}
		watch(showModal, (cur, old) => {
			document.body.style.overflow = ''
			if (cur) {
				document.body.style.overflow = 'hidden'
			}
		})

		return { showModal, sendtest, }
	},
})
</script>

<style lang="scss" scoped>
@import '@/sass/components//utility/__utility.scss';

#nav {
	display: flex;
	height: 60px;
	border-bottom: #bababa 1px solid;

	.nav {
		display: flex;
		align-items: center;
		margin: 0 auto;
		// changes the width of the navbar
		max-width: min(100% - 15rem);
		@media screen and (max-width: map-get($breakpoints, medium )) {
			& {
				width: 100%;
				justify-content: space-between;
			}
		}

		&__link-container {
			display: flex;
			width: 1000px;
			justify-content: flex-end;
			align-items: center;

			@media screen and (max-width: map-get( $breakpoints, medium)) {
				& {
					display: none;
				}
			}
		}
		&__link {
			margin-left: 40px;
			font-weight: 700;
			font-size: 1.6rem;

			&--logo {
				@include button-login;
				margin-left: 40px;
				&:hover {
					background: $hover-button;
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
		&__burgermenu {
			display: none;

			@media screen and (max-width: map-get($breakpoints, medium )) {
				& {
					display: block;
				}
			}
		}
	}
}
</style>
