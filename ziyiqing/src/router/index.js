import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import front from '@/views/Homepage.vue'
import resume from '@/views/Resume.vue'
import article from '@/views/Article.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/front',
    name:'front',
    component:front
  },
  {
    path:'/resume',
    name:'resume',
    component:resume
  },
  {
    path:'/article',
    name:'article',
    component:article
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router