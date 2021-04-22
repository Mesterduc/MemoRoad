<template>
	<div v-if="showModal">
		<section class="modal-background" @click="closeModal"></section>
		<article class="form">
			<img class="form__logo" src="@/assets/MemoRoadLogo.svg" alt="logo" />
			<article class="form__close-icon">
				<img class="form__close-icon-inner" src="@/assets/icon/closebutton.svg" @click="closeModal" />
			</article>
			<article class="form__back-icon" v-if="!signIn">
				<img class="form__back-icon-inner" src="@/assets/icon/backarrow.svg" @click="changeModal" />
			</article>

			<async-modal-sign-in v-if="signIn" @forgotPassword="changeModal" @createAccount="changeModal" />
			<async-modal-create-account v-if="createAccount" />
			<async-modal-forgot-password v-if="forgotPassword" />
		</article>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, defineAsyncComponent } from 'vue'
const AsyncModalSignIn = defineAsyncComponent(() => import('./ModalSignIn.vue' /* webpackChunkName: "SignIn" */))
const AsyncModalCreateAccount = defineAsyncComponent(
	() => import('./ModalCreateAccount.vue' /* webpackChunkName: "CreateAccount" */)
)
const AsyncModalForgotPassword = defineAsyncComponent(
	() => import('./ModalForgotPassword.vue' /* webpackChunkName: "ForgotPassword" */)
)

export default defineComponent({
	name: 'Index-Modal',
	components: {
		AsyncModalSignIn,
		AsyncModalCreateAccount,
		AsyncModalForgotPassword,
	},
	props: {
		showModal: {
			type: Boolean,
		},
	},
	emits: ['closeModal'],
	setup(props, context) {
		//close the modal
		function closeModal() {
			context.emit('closeModal')
			modal.signIn = true
			modal.createAccount = false
			modal.forgotPassword = false
		}

		//change modal to create account or forgot password
		const modal = reactive({
			signIn: true,
			createAccount: false,
			forgotPassword: false,
		})

		function changeModal(modalPage: String) {
			if (modalPage === 'account') {
				modal.signIn = false
				modal.createAccount = true
			} else if (modalPage === 'password') {
				modal.signIn = false
				modal.forgotPassword = true
			} else {
				modal.signIn = true
				modal.createAccount = false
				modal.forgotPassword = false
			}
		}

		return {
			closeModal,
			...toRefs(modal),
			changeModal,
		}
	},
})
</script>

<style lang="scss" scoped>
// @import '@/sass/components/_input';
@import '@/sass/components//utility/__utility.scss';

.modal-background {
	position: fixed;
	background: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	overflow: hidden;
	z-index: 1;
}
.form {
	z-index: 1;
	position: fixed;
	width: 40vw;
	max-width: 550px;
	// min-height: 365px;
	background: white;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 15px;
	@media screen and (max-width: map-get($breakpoints, extra-large )) {
		& {
			width: 45vw;
		}
	}
	@media screen and (max-width: map-get($breakpoints, large )) {
		& {
			width: 57vw;
		}
	}
	@media screen and (max-width: map-get($breakpoints, medium )) {
		& {
			width: 90vw;
		}
	}
	@media screen and (max-width: map-get($breakpoints, small )) {
		& {
			width: 100%;
		}
	}

	&__logo {
		display: block;
		margin: 20px auto 40px auto;
		&-wrapper {
			width: 100%;
		}
	}

	&__close-icon {
		position: absolute;
		right: 15px;
		top: 15px;
		height: 1.6rem;
		width: 1.6rem;
		cursor: pointer;
		&-inner {
			height: 100%;
			width: 100%;
		}

		// &:hover {
		// 	color: $blur-text-color;
		// }
	}
	&__back-icon {
		position: absolute;
		left: 15px;
		top: 15px;
		height: 1.6rem;
		width: 1.6rem;
		cursor: pointer;
		&-inner {
			height: 100%;
			width: 100%;
		}

		// &:hover {
		// 	color: $blur-text-color;
		// }
	}
}
</style>
