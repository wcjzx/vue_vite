<template>
  <div class="header">
    <div class="box">
      <span class="name">{{ store.userInfo.name }}</span>
      <nav class="nav">
        <router-link class="link" active-class="active" to="/front"
          >首页</router-link
        >
        <router-link class="link" active-class="active" to="/resume"
          >简历</router-link
        >
        <router-link class="link" active-class="active" to="/article"
          >文章</router-link
        >
        <router-link class="link" active-class="active" to="/ask"
          >大学生活</router-link
        >
        <router-link class="link" active-class="active" to="/ask"
          >书架</router-link
        >
        <router-link class="link" active-class="active" to="/ask"
          >摄影</router-link
        >
      </nav>
    </div>
  </div>
</template>

<script setup lang="js">
import { reactive, ref,onMounted,onBeforeMount } from 'vue';
import { useStore } from '@/pinia/index.js'

const store = useStore();

</script>

<style scoped lang="scss">
@import '@/SCSS/components/Homepage/NavigationBar.scss'
</style>
