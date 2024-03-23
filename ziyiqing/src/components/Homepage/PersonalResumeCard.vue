<template>
    <div class="personalResumeCard">
        <div class="photo">
            <img src="@/assets/images/15912486859130400.jpg" alt="tupian">
        </div>
        <div class="name">
            <h2>子驿卿</h2>
            <h4>"天生我才必有用，千金散尽还复来！"</h4>
        </div>

        <div class="dividingLine"><b>--------------------------------</b></div>
        <div class="from">
            <div class="key">
                <div>毕业院校</div>
                <div>毕业城市</div>
                <div>专业</div>
            </div>
            <div class="value">
                <div>{{ store.userInfo.School}}</div>
                <div>{{ store.userInfo.GraduateCity}}</div>
                <div>{{ store.userInfo.Professions}}</div>
            </div>
            
        </div>
        <div class="dividingLine"><b>--------------------------------</b></div>
        <div class="icons">
            <p>
                <i class="icon iconfont icon-weixin"></i>
                <i class="icon iconfont icon-github"></i>
                <i class="icon iconfont icon-QQ "></i>
            </p>
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from '@/pinia/index.js'
const store = useStore();
</script>
<style scoped lang="scss">
@import '@/SCSS/components/Homepage/PersonalResumeCard.scss'
</style>
