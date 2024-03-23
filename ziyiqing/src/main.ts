
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import axios from 'axios'
import '@/assets/icons/font_4468992_pkrudyypulg/iconfont.css'
import { createPinia } from 'pinia'




const app = createApp(App)
app.use(createPinia())

app.config.globalProperties.axios = axios
app.use(ElementPlus)
app.use(router)
app.mount('#app')
