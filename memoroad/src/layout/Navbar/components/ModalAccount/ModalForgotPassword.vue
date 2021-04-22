<template>
	<div class="form__container">
		<label for="email" class="form__label">Forgot your Password?</label>
		<input type="email" name="email" id="email" class="form__input" placeholder="Email address" />
		<button type="submit" class="form__button form__button--reset-password">Reset Password</button>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Modal-Forgot-Password',
	setup() {},
})
</script>

<style lang="scss" scoped>
// @import '@/sass/components/_input';
@import '@/sass/components//utility/__utility.scss';
.form {
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
		margin-bottom: 0.3rem;
	}

	&__button {
		&--reset-password {
			@include button-reset-password;
			
		}
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
