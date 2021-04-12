<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 id="hello">as1asd</h1>
  </div>
  <span class="hello">as1asd</span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  .hello{
  }

</style>