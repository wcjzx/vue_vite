<template>
  <div class="businessCard">
    <!-- 顶部区 -->
    <div class="top">
      <div class="img">
        <img src="@/assets/images/15912486859130400.jpg" alt="" />
      </div>
      <div class="name">
        <h3>「子驿卿」</h3>
      </div>
    </div>
    <div class="middle">
      <!-- 标签栏 -->
      <div>
        <div>项目</div>
        <div>项目</div>
        <div>项目</div>
      </div>
    </div>
    <!-- 个人主页 -->
    <div>
      <el-button class="elbutton">个人首页</el-button>

    </div>
  </div>
</template>

 <script setup lang="js">
import {computed} from 'vue'

 </script>

<style scoped lang="scss">
@import '@/SCSS/components/Article/BusinessCard.scss'
</style>
