<template>
  <div class="listOfItems">
    <div class="tab">
      <i>icon</i>
      <span>最新动态</span>
    </div>
    <div class="spatial-dynamics">
      <div
        class="spatial-dynamics-content-item"
        v-for="(item, index) in spatialdynamics"
        :key="index"
      >
    <div>
      <img src="" alt="">
    </div>
    <div>
      <h6></h6>
      <p>{{ item.title }}</p>
      <!-- 标签、分类 -->
      <div class="item-tag">
        <div>{{ item.tag }}</div>
      </div>
      <!-- 简介 -->
      <div class="item-introduction">{{ item.introduction }}</div>
      <!-- 点赞、收藏、评论 -->
      <div class="item-like-collect-comment">
        <div>{{ item.like }}</div>
        <div>{{ item.collect }}</div>
        <div>{{ item.comment }}</div>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const spatialdynamics = ref({
  1: {
    title: "空间动力学",
    introduction: "空间动力学",
    like: "点赞",
    collect: "收藏",
    comment: "评论",
  },
  2:{
    title: "空间动力学",
    introduction: "空间动力学",
    like: "点赞",
    collect: "收藏",
    comment: "评论",
  },
  3:{
    title: "空间动力学",
    introduction: "空间动力学",
    like: "点赞",
    collect: "收藏",
    comment: "评论",
  },
  4:{
    title: "空间动力学",
    introduction: "空间动力学",
    like: "点赞",
    collect: "收藏",
    comment: "评论",
  },
  5:{
    title: "空间动力学",
    introduction: "空间动力学",
    
    like: "点赞",
    collect: "收藏",
    comment: "评论",
  },
  6:{
    title: "空间动力学",
    introduction: "空间动力学",
    like: "点赞",
    collect: "收藏",
    comment: "评论",
  }
});
</script>

<style scoped lang="scss">
// 生成组件有关的scss结构
@import "@/common/common";
.listOfItems {
  margin: 30px 0 auto;
  width: 1200px;
.tab{
padding: 0 0 8px 30px;
font-size: 20px;
// 虚线下边框

border-bottom: 1px dashed #ccc;
}
.spatial-dynamics{
 display: flex;
 justify-content: space-around;
//  align-items: center;
 flex-direction: row;
 flex-wrap: nowrap;
 flex-flow: row wrap;
 flex-grow: 1;
 flex-shrink: 1;
 flex-basis: auto;
 flex: 1 1 auto; 
}
.spatial-dynamics-content-item {
  @include cardStyle;
  height: 350px;
  margin-top: 20px;
  width: 350px;
  

}
}
</style>