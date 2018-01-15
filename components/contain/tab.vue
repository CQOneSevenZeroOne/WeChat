<template>
    <div>
        <xsildebar />
        <router-view></router-view>
        <xfooter />
    </div>
</template>
<script>
// 引入公共组件
import xfooter from "../xfooter.vue";
import xsildebar from "../xsildebar.vue";
export default {
  components:{
      xfooter,
      xsildebar
  }
}
</script>

