<template>
<div class="categoryList">
    <div class="categorylist-title">分类</div>
    <div class="categorylist-content">
        <div class="categorylist-content-item" v-for="(item,index) in categoryList" :key="index" >
            <!-- <div class="categorylist-content-item-title">{{item.cid}}</div> -->
            <div class="categorylist-content-item-num">{{item.categoryname}}</div>
        </div>
    </div>
</div>
</template>

 <script setup lang="js">
import { ref, onMounted, computed, defineEmits, defineComponent } from "vue";
import axios from "axios";
import { getArticleCategoryInfo} from "@/utils/request"
const categoryList = ref([{}]);
getArticleCategoryInfo().then(res => {
    categoryList.value = res.data    
})
 </script>
<style scoped lang="scss">
@import '@/SCSS/components/Article/categorylist.scss'
</style>
