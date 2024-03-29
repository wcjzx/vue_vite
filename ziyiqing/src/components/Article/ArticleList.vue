<template>
  <div class="articleList">
    <div
      class="articleList-content-item"
      v-for="(item, index) in categoryList"
      :key="index"
    >

      <div class="articleList-content-item-name">
    <i class="icon iconfont icon-gonggao"></i>  
        {{ item.categoryName }}</div>
      <div class="articleList-content-item-content">
        <div
          class="articleList-content-item-content-item"
          v-for="(item, index) in item.flavors"
          :key="index"
        >
        <!-- 插入图片 -->
        <img src="@/assets/images/wallhaven-x621xo.png" alt="" />
          <div class="articleList-content-item-content-item-title">
            {{ item.articlename }}
          </div>
          <div class="articleList-content-item-content-item-time">
            {{ item.articleintro }}
            <div />
            <!-- 图标：收藏、点赞、观看数 -->
            <div class="icon">
              <i class="icon iconfont icon-gonggao"></i>
            <i class="icon iconfont icon-gonggao"></i>
            <i class="icon iconfont icon-gonggao"></i>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script setup lang="js">
import { ref, onMounted, computed, defineEmits, defineComponent } from "vue";
import { getCategoryArticle} from "@/utils/request"
const categoryList = ref([{}])

getCategoryArticle().then(res => {
  categoryList.value = res.data
  console.log(categoryList.value)
  console.log(categoryList.value[0].flavors)
  console.log(res)
})



 </script>
<style scoped lang="scss">
@import '@/SCSS/components/Article/ArticleList.scss'

</style>
