<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <h1 id="hello">as1asd</h1>
  </div>
  <span class="hello">as1asd</span>
  <login-modal></login-modal>
</template>

<script lang="ts">
import  {defineComponent} from "vue"
// import { Options, Vue } from "vue-class-component";

import LoginModal from './components/LoginModal.vue'

export default defineComponent({
  components: { LoginModal },
  component: {
    LoginModal
  }
})
</script>

<style lang="scss" scoped>
  .hello{
  }

</style>