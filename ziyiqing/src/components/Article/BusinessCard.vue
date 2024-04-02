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
.businessCard {
  height: 230px;
  // background: #fff1ff;
  border-radius: 10%;
  display: flex;
  // 设置主轴为垂直方向
  flex-direction: column;
  .top {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // flex布局副轴方向居中对齐
    align-items: center;
    .img{
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-top: 10px ;
        float: left;
      }
    }
    .name{
      h4{
        margin-top:15px ;
        padding: 0px;
      }
     
    }
  }
  .middle {
    padding-top: 10px;
    // padding: 0;
    // border-top: 2px solid #020c1d;
    height: 20%;
    div{
      display: flex;
      justify-content: center;
      // align-items: center;
      // 设置可以换行
      // flex-wrap: wrap;
      div {
        font-size: 15px;
        width: 30%;
        margin-right:15px ;
      }
    }
  
  }
  div{
    // 盒子居中对齐
    margin: 0px;
    padding: 0;
    display: flex;
    justify-content: center;
   
  }
    
  

}

// @import '@/SCSS/components/Article/BusinessCard.scss'
</style>
