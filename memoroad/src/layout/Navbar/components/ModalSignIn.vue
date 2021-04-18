<template>
	<!-- <teleport to="#app"> -->
	<section class="modal-background" @click="sendtest"></section>
	<article class="form">
		<img class="form__logo" src="@/assets/MemoRoadLogo.svg" alt="logo" />
		<!-- <fa @click="sendtest" class="close-icon" icon="times"/> -->
		<article class="form__close-icon">
			<img class="form__close-icon-inner" src="@/assets/icon/closebutton.svg" @click="sendtest" />
		</article>
		<div class="form__container">
			<label for="email" class="form__label">Email address</label>
			<input type="email" name="email" id="email" class="form__input form__email" placeholder="Email address" />
			<label for="password" class="form__label">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				class="form__input form__password"
				placeholder="Password"
			/>
			<article class="test">
				<router-link class="tests" to="/">Forgot you password?</router-link>
				<router-link class="tests" to="/about">Create a free account</router-link>
			</article>
			<button type="submit" class="form__button form__button--submit">Sign in</button>
			
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
	position: fixed;
	background: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	overflow: hidden;
}
.form {
	position: fixed;
	width: 40vw;
	max-width: 550px;
	height: 365px;
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
		&:hover {
			background: $hover-button;
		}
	}

	&__close-icon {
		position: absolute;
		right: 15px;
		top: 15px;
		height: 1.6rem;
		width: 1.6rem;
		&-inner{
			height: 100%;
			width: 100%;
		}


		// &:hover {
		// 	color: $blur-text-color;
		// }
	}
}

.test {
	display: flex;
	justify-content: space-between;
	margin: 5px 0 15px 0;
	font-size: 1.6rem;
	font-weight: 600;
}
.tests {
	color: $blur-text-color;
}
</style>
