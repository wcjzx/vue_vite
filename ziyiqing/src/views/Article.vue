<template>
<div class="article">
    <navigationBar/>
    <div class="context">
        <businessCard/>
        <div class="right">文章</div>
    </div>

    
</div>
</template>

 <script setup lang="js">
import {computed} from 'vue';
import navigationBar from "@/components/Homepage/NavigationBar.vue";
import businessCard from "@/components/Article/BusinessCard.vue";

components: {
    navigationBar,
    businessCard

}
 </script>
<style scoped lang="scss">
.article {
    .context {
        .left {
        }
        .right {
        }
    }
}
</style>
