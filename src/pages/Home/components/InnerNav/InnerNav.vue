<template>
<div class="indexIcon">
  <ul class="indexGroup">
      <li class="item" v-for="(item, index) in policyDescList" :key="index"><img :src="item.icon" >{{item.desc}}</li>
      <!-- <li class="item"><span class="iconfont icon-icon_star"></span>30天无忧退货</li>
      <li class="item"><span class="iconfont icon-icon_star"></span>48小时快速退款</li> -->
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
      computed:{
      ...mapState({policyDescList:(state)=>state.home.homeData})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../../common/stylus/mixins.styl"
.indexIcon
  width 100%
  box-sizing border-box
  padding rem(10px) rem(15px)
  .indexGroup
    display flex
    .item
      margin rem(0) rem(14px)
      font-size rem(26px)
      img
        width rem(32px)
        height rem(32px)
  
 
</style>
