<template>
	<div class="form__container">
        <!-- <label for="email" class="form__label">Email address</label> -->
		<input type="email" name="email" id="email" class="form__input form__email" placeholder="Fullname" />
		<!-- <label for="password" class="form__label">Password</label> -->
		<input type="email" name="email" id="email" class="form__input form__email" placeholder="Email address" />
        <input
			type="password"
			name="password"
			id="password"
			class="form__input form__password"
			placeholder="Password"
		/>
        <!-- <label for="email" class="form__label">Email address</label> -->
		
		<!-- <label for="password" class="form__label">Password</label> -->
		<input
			type="password"
			name="password"
			id="password"
			class="form__input form__password"
			placeholder="Confirm Password"
		/>
        <button type="submit" class="form__button form__button--submit">Sign in</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Modal-Create-Account',
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
	}

	&__button {
		@include button-login;
		width: 65%;
		height: 55px;
		margin: 0 auto 1rem auto;
		display: block;
		&:hover {
			background: $hover-button;
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

