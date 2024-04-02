<template>
  <div
    class="navigationBar"
  >
    <div class="navigation" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <!-- 导航区 -->
      <div class="box">
        <span class="name">{{ store.userInfo.name }}</span>
        <nav class="nav">
          <router-link class="link" active-class="active" to="/Homepage"
            >首页</router-link
          >
          <router-link class="link" active-class="active" to="/resume"
            >简历</router-link
          >
          <router-link class="link" active-class="active" to="/article"
            >文章</router-link
          >
          <router-link class="link" active-class="active" to="/ask"
            >大学生活</router-link
          >
          <router-link class="link" active-class="active" to="/ask"
            >书架</router-link
          >
          <router-link class="link" active-class="active" to="/ask"
            >摄影</router-link
          >
        </nav>
      </div>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
    </div>
</template>

 <script setup lang="js">
import { ref,reactive, onBeforeMount,onMounted, computed, watch,defineEmits, defineComponent } from "vue";
import {RouterView,RouterLink,useRouter} from 'vue-router'
// 从store获取后端的个人信息数据
import { useStore } from '@/pinia/index.js'
const store = useStore();
store.getUserInfo();
console.log(store.userInfo)
// 首次即加载主页信息
const router = useRouter()

function showNewsDetail(){
  router.replace({
    name:'Homepage',
  })
} 
showNewsDetail()
// 根据路由路径设置背景图片
let backgroundImage = computed(()=>{
  return router.currentRoute.value.fullPath
})
watch(backgroundImage,( newValue,oldValue)=>{

  switch (newValue) {
    case '/Homepage':
      backgroundImage = 'src/assets/images/BackgroundPicture/image.png';
      break;
    case '/resume':
      backgroundImage = 'src/assets/images/pop1.png';
      break;
    default:
      backgroundImage = '';
  }
},{immediate:true})

 </script>
<style scoped lang="scss">
$f-size: 25px;
@mixin fontgs {
  margin-left: 70px;
  line-height: 70px;
  font-size: 25px;
}
.navigationBar {
  height: 100%;

  .navigation {
    background-size:100%;
    border-radius:  0 0  5% 5%;
    background-repeat: no-repeat;
    height:380px;
    .box {
      &:hover {
        background-color: rgba(64, 76, 78, 0.4);
      }
      height: 70px;
      padding: 0px;
      .name {
        @include fontgs();
      }
      .nav {
        float: right;
        @include fontgs;
        margin-right: 10px;
        height: 70px;
        .link:last-child {
          margin-right: 50px;
          
        }
        .link {
          text-decoration: none;
          font-size: 30px;
          margin: 20px;
          color: #fff;
        }
      }
    }
  }
}
</style>