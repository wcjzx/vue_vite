<template>
  <div class="home">
    <RouterLink to="/front" active-class="active">子驿卿</RouterLink>
    <h2>欢迎来到子驿卿的个人空间</h2>
    <h3>路漫漫其修远兮，吾将上下而求索！</h3>
  </div>
</template>

<script setup lang="js">
import {ref} from "vue"
const a = ref(0)
</script>

<style scope>


.home {
  display: flex;
  flex-direction: column;
  background-image: url("@/assets/bird-7914702_1920.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
  padding:0px;
 
  /* width: 100%;
  /* height: 100%; */ 
  min-width: 900px;
  min-height: 700px;
 
  justify-content: center;
  align-items: center;
}


</style>
