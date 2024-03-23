<template>
  <div class="home">
    <RouterLink to="/front" active-class="active">子驿卿</RouterLink>
    <h2>欢迎来到子驿卿的个人空间</h2>
    <h3>路漫漫其修远兮，吾将上下而求索！</h3>
  </div>
</template>

<script setup lang="js">
import {ref} from "vue"
const a = ref(0)
</script>

<style scoped lang="scss">
@import '@/SCSS/views/Home.scss'
</style>
