<template>
  <div class="Homepage">
    <div class="navigationBar">
      <div class="middleLevel">
      <personalResumeCard :User="User"></personalResumeCard>
      <div class="project">
        <famousQuoteCard />
        <listOfItems />
      </div>

    </div>
    </div>
    
  </div>
</template>
<script setup lang="js">
import { ref,reactive,onBeforeMount } from "vue"
import famousQuoteCard from "@/components/Homepage/FamousQuoteCard.vue"
import personalResumeCard from "@/components/Homepage/PersonalResumeCard.vue"
import listOfItems from "@/components/Homepage/ListOfItems.vue"
import { useStore } from '@/pinia/index.js'


</script>

<style scoped lang="scss">
@import '@/SCSS/views/Homepage.scss'
</style>
