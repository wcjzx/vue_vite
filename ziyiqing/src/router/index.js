import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Homepage from '@/views/Homepage.vue'
import resume from '@/views/Resume.vue'
import article from '@/views/Article.vue'
import NavigationBar from '@/views/NavigationBar.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/NavigationBar',
    name: 'NavigationBar',
    component: NavigationBar,
    children: 
      [
        {
          path: '/Homepage',
          name: 'Homepage',
          component: Homepage
        },
        {
          path: '/resume',
          name: 'resume',
          component: resume
        },
        {
          path: '/article',
          name: 'article',
          component: article
        }
      ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router