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
// @import '@/SCSS/components/Homepage/PersonalResumeCard.scss'

@import '@/common/common';

.personalResumeCard {

    @include cardStyle;
    height: 400px;
    width: 300px;

    .photo {
        text-align: center;
        margin-top: 30px;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

    }

    .name {
        text-align: center;
    }

    .dividingLine {
        margin-bottom: 5px;
        text-align: center;
    }

    .from {
        height: 70px;

        .key {
            float: left;
            margin-left: 15px;
            div{
                margin-bottom:5px ;
            }
        }

        .value {
            float: right;
            margin-right: 15px;
            }
            div{
                margin-bottom:5px ;
            }
        }
    }
    .icons{
        text-align: center;
        i{
            margin: 20px;
            font-size: 25px;
        }
    }






</style>
