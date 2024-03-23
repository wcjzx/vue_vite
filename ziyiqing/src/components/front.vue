<template>
    <div class="common-layout">
      <el-container>
        <el-header>
            <hander/>
        </el-header>
        <el-container>
          <el-aside width="200px"></el-aside>
          <el-main>
            <left/>
          </el-main>
        </el-container>
      </el-container>
      <el-button>moren</el-button>
    </div>
    
  </template>

<script setup lang="js">
import {ref} from "vue"
import hander from "@/components/front/hander.vue"
import left from "@/components/front/left.vue"
components:{
    hander,
    left
}
const a = ref(0)
</script>

<style lang="less" module>
</style>
