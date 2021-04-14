<template>
	<!-- <teleport to="#app"> -->
	<section class="modal-background" @click="sendtest"></section>
	<article class="form">
		<img class="form__logo" src="@/assets/MemoRoadLogo.svg" alt="logo" />
		<div class="form__container">
			<label for="email" class="form__label">Email address</label>
			<input type="email" name="email" id="" class="form__input form__email" placeholder="Email address" />
			<label for="password" class="form__label">Password</label>
			<input type="password" name="password" id="" class="form__input form__password" placeholder="Password" />
			<article class="test">
				<router-link class="test2" to="/">Forgot you password?</router-link>
				<router-link class="test2" to="/">Create a free account</router-link>
			</article>
			<button type="submit" class="form__button form__button--submit">Log in</button>
		</div>
	</article>
	<!-- </teleport> -->
</template>

<script lang="ts">
import { defineComponent, ref, setDevtoolsHook } from 'vue'

export default defineComponent({
	name: 'Login-Modal',
	components: {},
	props: [''],
	emits: ['sendtest', 'sendtest'],
	setup(props, context) {
		function sendtest() {
			context.emit('sendtest')
		}
		return { sendtest }
	},
})
</script>

<style lang="scss" scoped>
// @import '@/sass/components/_input';
@import '@/sass/components//utility/__utility.scss';

.modal-background {
	position: absolute;
	background: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
}
.form {
	width: 50vh;
	height: 50vh;
	background: white;
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 15px;

	&__container {
		height: 100%;
		width: 100%;
		padding: 0 5vh;
	}
	&__logo {
		display: block;
		margin: 20px auto 40px auto;
		&-wrapper {
			width: 100%;
		}
	}

	&__input {
		@include form-input;
		padding-left: 15px;
		font-size: 18px;
	}
	&__email {
		
	}
	&__password {
	}

	&__label {
		display: block;
		font-weight: 600;
		font-size: 2rem;
	}

	&__button {
		@include button-login;
		width: 65%;
		height: 55px;
		margin: 0 auto 0 auto;
		display: block;
	}
}
</style>
