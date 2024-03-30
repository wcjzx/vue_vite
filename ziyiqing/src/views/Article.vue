<template>
  <div class="article">
    <div class="article-content">
      <div class="article-left">
        <businessCard />
        <!-- 分类组件 -->
        <categoryList />
      </div>
      <div class="article-right">
        <!-- 通知组件 -->
        <noticeList/>
        <!-- 文章列表组件 -->
        <articleList/>
      </div>
    </div>
  </div>
</template>

 <script setup lang="js">
import {computed} from 'vue';
import businessCard from "@/components/Article/BusinessCard.vue";
import categoryList from "@/components/Article/CategoryList.vue";
import articleList from "@/components/Article/ArticleList.vue";
import noticeList from "@/components/Article/NoticeList.vue";

 </script>
<style scoped lang="scss">
.article {
  .article-content {
    padding: 0 5%;
    display: flex;
    .article-left {
      width: 20%;
      .businessCard {
        margin-top: 20px;
        
      }
      .categoryList{
        margin-top: 20px;
      } 
      
    }
    .article-right{
        width: 75%;
        height: 780px;
        background: #FAE8E0;
        margin-left: 5%;
        border-radius: 10%;
        margin-top:20px
    }
  }
}
</style>
