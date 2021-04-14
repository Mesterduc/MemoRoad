<template>
	<!-- <teleport to="#app"> -->
	<section class="modal-background" @click="sendtest"></section>
	<article class="form">
		<img class="form__logo" src="@/assets/MemoRoadLogo.svg" alt="logo" />
		<div class="form__container">
			<label for="email" class="form__label">E-mail address</label>
			<input type="email" name="email" id="" class="form__input form__email" />
			<label for="password" class="form__label">Password</label>
			<input type="password" name="password" id="" class="form__input form__password" />
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
		// margin-bottom: 10px;
		// width: 100%;
		// border-radius: 5px;
		// height: 40px;
		// border: 2px solid #e0e0e0;
	}
	&__email {
	}
	&__password {
	}

	&__label {
		display: block;
		font-weight: 600;
		// margin: 5px 0 5px 0;
	}

	&__button {
		display: block;
	}
}
</style>
