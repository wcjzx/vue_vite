<template>
  <div class="Homepage">
    <navigationBar :User="User"></navigationBar>
    <div class="middleLevel">
      <personalResumeCard :User="User"></personalResumeCard>
      <div class="project">
        <famousQuoteCard />
        <listOfItems />
      </div>

    </div>
  </div>
</template>
<script setup lang="js">
import { ref,reactive,onBeforeMount } from "vue"
import navigationBar from "@/components/Homepage/NavigationBar.vue"
import famousQuoteCard from "@/components/Homepage/FamousQuoteCard.vue"
import personalResumeCard from "@/components/Homepage/PersonalResumeCard.vue"
import listOfItems from "@/components/Homepage/ListOfItems.vue"
import { useStore } from '@/pinia/index.js'
components: {
  navigationBar,
    famousQuoteCard,
    personalResumeCard,
    listOfItems
}

const store = useStore();
store.getUserInfo()
console.log(store.userInfo)

</script>

<style scoped lang="scss">
@import '@/SCSS/views/Homepage.scss'
</style>
