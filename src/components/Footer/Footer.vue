<template>
  <div class="footer">
    <ul class="footerItems">
        <li :class="{active:$route.path === '/home'}">
            <span class="iconfont icon-liwu orange" @click="goto('/home')"></span>
            <span class="footerText orange">首页</span>
        </li>
        <li :class="{active:$route.path === '/categorylist'}" @click="goto('/categorylist')">
            <span class="iconfont icon-icon_success"></span>
            <span class="footerText">分类</span>
        </li>
        <li :class="{active:$route.path === '/search'}" @click="goto('/search')">
            <span class="iconfont icon-shouye"></span>
            <span class="footerText">搜索</span>

        </li>
        <li :class="{active:$route.path === '/shopCart'}" @click="goto('/shopCart')">
            <span class="iconfont icon-icon_money"></span>
            <span class="footerText">购物车</span>
        </li>
        <li :class="{active:$route.path === '/profile'}" @click="goto('/profile')">
            <span class="iconfont icon-icon_update"></span>
            <span class="footerText">个人</span>
        </li>
    </ul>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        
      }
    },
    methods: {
      goto (path) {
        this.$router.replace(path);
      }
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.footer
    background-color: #fff
    position: fixed
    z-index: 1
    bottom 0
    width 100%
    height rem(98px)
    border-top 1px solid 
    .footerItems
      width 100%
      height 100%
      padding-top rem(20px)
      display flex
      flex-flow nowrap
      justify-content space-around
      li
        flex-direction
        .iconfont
          font-size rem(40px)
          width rem(40px)
          height rem(40px)
        span
          display block
          height rem(42px)
          font-size rem(24px)
        &.active
          color: red

 
</style>
