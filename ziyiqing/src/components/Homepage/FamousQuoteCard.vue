<template>
  <div class="famousQuoteCard">
    <h3>
      <i>图标</i>
      <span>「最新日志」</span>
    </h3>
    <h4>
- {{NoticeLaster}}
      <i>-- {{NoticeLasterTime}}</i>
    </h4>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const NoticeLaster = ref("子驿卿网站空间2024年4月1日调整布局中,期待成品！！");
const NoticeLasterTime = ref("2024-04-01");

</script>

<style scoped lang="scss">
@import "../../common/common.scss";

.famousQuoteCard{
  // 虚线边框
  border: 1px dashed #9c9a9a;
  border-radius: 10px;
  margin-left: 10px;
  // background: #337753;
  width: 1200px;
  h3{
    margin: 30px;
  }
  h4{
    font-size: larger;
    margin-left:30px ;
    // 取消加粗
    font-weight: normal;
    i{
      float: right;
      margin-right: 50px;
    }
  }
}

</style>
