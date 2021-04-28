<template>
	<section class="dropdown">
		<button class="knap" @click="toggle">
			{{ buttonValue }}
			<svg viewBox="0 0 24 24" class="arrow ml-1 h-5 w-5 fill-current text-gray-700">
				<path
					d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
				></path>
			</svg>
		</button>
		<article class="dropdown-item" v-if="isOpen" @click="toggle">
			<span class="dropdown-item__value" @click="getValue">show all</span>
			<span class="dropdown-item__value" @click="getValue">latest</span>
			<span class="dropdown-item__value" @click="getValue">oldest</span>
		</article>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dropdownContent from './AppDropdownContent.vue'
import dropdownItem from './AppDropdownItem.vue'

export default defineComponent({
	name: 'Dropdown',
	setup(context) {
		const isOpen = ref(false)
		const buttonValue = ref('show all')

		function toggle() {
			isOpen.value = !isOpen.value
		}
		function getValue(e: any) {
			buttonValue.value = e.target.innerHTML
		}

		return { isOpen, toggle, buttonValue, getValue }
	},
	props: {},
	components: {},
})
</script>

<style lang="scss" scoped>
.knap {
	width: 100%;
	padding: 5px;
	border: 1px solid #c1c1c1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 30px;
	border-radius: 2px;
}
.arrow {
	height: 16px;
}
.dropdown {
	position: relative;
	background: white;
	min-width: 125px;

	&-item {
		position: absolute;
		top: 29px;
		left: 0;
		display: flex;
		flex-direction: column;
		border: 1px solid rgb(185, 185, 185);
		width: 100%;
		&__value {
			padding: 2px 5px;

			&:hover {
				background: black;
				color: white;
			}
		}
	}
}
</style>
