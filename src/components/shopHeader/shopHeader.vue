<template>
  <div>
    <div class="shopHeader" slot="headerSlot">
        <div class="shopHeaderLeft">
            <span class="iconfont icon-home-blue" @click="$router.replace('/home')" ></span>
        </div>
        <slot name="headerTitle"></slot>
        <div class="shopHeaderMiddle"><a href="javascript:">网易严选</a></div>
        <div class="shopHeaderRight">
            <span  class="iconfont icon-fangdajing4" @click="$router.push('/searchfor')"></span>
            <span class="iconfont icon-buy" @click="$router.replace('/ShopCart')"></span>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
  .shopHeader
      display flex
      width 100%
      height rem(101px)
      // padding rem(16px) rem(24px) 
      background #eee
      border-bottom rem(1px) solid #ccc
      .shopHeaderLeft
        display inline-block
        span
          font-size rem(40px)
          margin-left rem(20px)
        //   line-height rem(150px)
      .shopHeaderMiddle
        font-size rem(40px)
        width 100%
        line-height rem(150px)
        text-align center
        margin-left  rem(196px)
      .shopHeaderRight
        width 100%
        display flex
        position relative
        font-size rem(40px)
        align-items center
        justify-content flex-end
        span
          font-size rem(40px)
          margin-right rem(30px)
 
</style>
