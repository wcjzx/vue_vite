import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import front from '@/components/front.vue'


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
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router