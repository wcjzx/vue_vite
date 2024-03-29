<template>
<div class="navigate">
    <!-- 导航区 -->
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
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
    
</div>
</template>

 <script setup lang="js">
import { ref, onMounted, computed, defineEmits, defineComponent } from "vue";
import navigationBar from '@/components/Homepage/NavigationBar.vue'

 </script>
<style scoped lang="scss">
</style>
vue