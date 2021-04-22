<template>
	<index-modal :showModal="showModal" @closeModal="closeModal" />

	<section id="nav">
		<nav class="nav">
			<router-link class="nav__logo-container" to="/">
				<img class="nav__logo" src="@/assets/MemoRoadLogo.svg" alt="logo" />
			</router-link>

			<div class="nav__link-container">
				<router-link class="nav__link" to="/">Home</router-link>
				<router-link class="nav__link" to="/about">Albums</router-link>

				<button type="button" v-if="loggedIn" class="nav__link--signIn">Sign out</button>
				<button type="button" v-else class="nav__link--signIn" @click="showModal = !showModal">Sign In</button>
			</div>
			<!-- Make burger menu her -->
			<!-- <nav class="nav__burgermenu" >
				
			</nav> -->
		</nav>
	</section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, defineAsyncComponent } from 'vue'
import IndexModal from './components/ModalAccount/IndexModal.vue'

export default defineComponent({
	name: 'TheNavbar',

	  setup(context) {
		// Sign in, create account and forgot password modal
		const showModal = ref(false)

		function closeModal() {
			showModal.value = !showModal.value
		}
		watch(showModal, (cur, old) => {
			document.body.style.overflow = ''
			if (cur) {
				document.body.style.overflow = 'hidden'
			}
		})

		// Is user logged in TODO...
		const loggedIn = ref(false)

		return { showModal, closeModal, loggedIn }
	},
	components: {
		IndexModal
	},
})
</script>

<style lang="scss" scoped>
@import '@/sass/components//utility/__utility.scss';

#nav {
	display: flex;
	height: 60px;
	border-bottom: #bababa 1px solid;
	position: sticky;
	top: 0;
	background-color: white;

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

			&--signIn {
				@include button-signIn;
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
