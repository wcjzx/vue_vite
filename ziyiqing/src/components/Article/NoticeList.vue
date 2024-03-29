<template>
<div class="noticeList">
    <i class="icon iconfont icon-gonggao"></i>
    <div>
        <span>{{ notice[0].notice }}</span>
    </div>
    
</div>
</template>

 <script setup lang="js">
import { ref, onMounted, computed, defineEmits, defineComponent } from "vue";
import { getArticleNotice } from "@/utils/request";
const notice=ref([{}]);
getArticleNotice().then((res) => {
    console.log(res);
    notice.value=res.data;
    console.log(notice.value);
});
 </script>
<style scoped lang="scss">
@import '@/SCSS/components/Article/NoticeList.scss'
</style>
