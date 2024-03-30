<template>
<div class="navigationBar">
  <div class="navigation">
     <!-- 导航区 -->
     <div class="box">
      <span class="name">{{ store.userInfo.name }}</span>
      <nav class="nav">
        <router-link class="link" active-class="active" to="/Homepage"
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
import { ref,reactive, onMounted, computed, defineEmits, defineComponent } from "vue";
import {RouterView,RouterLink,useRouter} from 'vue-router'
// 从store获取后端的个人信息数据
import { useStore } from '@/pinia/index.js'
const store = useStore();
store.getUserInfo();
console.log(store.userInfo)
// 首次即加载主页信息
const router = useRouter()
function showNewsDetail(){
  router.replace({
    name:'Homepage',
  })
} 
showNewsDetail()
 </script>
<style scoped lang="scss">
@import '@/SCSS/components/Homepage/NavigationBar.scss'
</style>
vue