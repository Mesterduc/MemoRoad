<template>
   <a href="#" class="link">
    <slot/>
  </a>
</template>

<style lang="scss" scoped>
.link{
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 5px;
}
</style>