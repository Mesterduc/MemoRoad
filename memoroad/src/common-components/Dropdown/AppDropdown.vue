<template>
	<!-- <template slot="toggler"> -->
        <div class="hej">

	<div @click="toggle">
			<button class="knap">show all
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="arrow ml-1 h-5 w-5 fill-current text-gray-700"
            >
              <path
                d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
              ></path>
            </svg>
            </button>
			<!-- <input type="text" class="knap" /> -->
	</div>
	<!-- </template> -->
	<dropdown-content :sharedState="sharedState">
		<dropdown-item>Action 1</dropdown-item>
		<dropdown-item>Action 2</dropdown-item>
		<dropdown-item>Action 3</dropdown-item>
	</dropdown-content>
        </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dropdownContent from './AppDropdownContent.vue'
import dropdownItem from './AppDropdownItem.vue'

export default defineComponent({
	name: 'Dropdown',
	setup(context) {
		const sharedState = ref(false)

		function toggle() {
			sharedState.value = !sharedState.value
		}

		return { sharedState, toggle }
	},
	props: {
		sharedState: {
			type: Boolean,
		},
        closeDropdown: {
            type: Boolean
        },
	},
	components: {
		dropdownContent,
		dropdownItem,
	},
})
</script>

<style lang="scss" scoped>
.hej{
    position: relative;
    width: 100px;
}
.knap{
    width: 100%;
    padding: 5px;
        border: 1px solid #c1c1c1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
}
.arrow{
    height: 16px;
}
</style>
