<template>
  <div class="resume">

    <navigationBar :User="User"></navigationBar>

    <div class="bottom">
        <introduce/>
        <universityExperience/>
        <technologyStack/>
        <project/>

    </div>
  </div>
</template>

<script setup lang="js">
import {computed,reactive,onBeforeMount} from 'vue'
import navigationBar from "@/components/Homepage/NavigationBar.vue";
import futurePlanning from "@/components/Resume/FuturePlanning.vue"
import hobby from "@/components/Resume/Hobby.vue"
import introduce from "@/components/Resume/Introduce.vue"
import project from "@/components/Resume/Project.vue"
import technologyStack from "@/components/Resume/TechnologyStack.vue"
import universityExperience from "@/components/Resume/UniversityExperience.vue"
import axios from 'axios'
components:{
    navigationBar,
    futurePlanning,
    hobby,
    introduce,
    project,
    technologyStack,
    universityExperience
}
let User=reactive({
    name:'',
    School:'',
Profession:'',
GraduateCity:''
});
onBeforeMount(()=>{
    axios({
                //请求类型
                method: 'get',
                //URL
                url: 'http://localhost:8090/user/userinfo',
            }).then(response => {
                User.name=response.data.username
                User.GraduateCity=response.data.graduatecity
                User.School=response.data.school
                User.Professions=response.data.professions
              
                
            })
  })


 </script>

<style scoped lang="scss">
@import '@/SCSS/views/Resume.scss'
</style>
