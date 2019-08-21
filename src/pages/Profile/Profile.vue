<template>
  <div class="mmsskk" >
    <div class="shopCartContainer" >
    <div class="shopHeader" >
      <div class="shopHeaderLeft">
        <span class="iconfont icon-home-blue" @click="$router.replace('/home')" ></span>
      </div>
      <div class="shopHeaderMiddle"><a href="javascript:">网易严选</a></div>
      <div class="shopHeaderRight">
        <span  class="iconfont icon-fangdajing4" @click="$router.push('/searchfor')"></span>
        <span class="iconfont icon-buy" @click="$router.replace('/shopCart')"></span>
      </div>
    </div>
  
    <div class="personYX" v-show="isShoww">
      <div class="personYXTop">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="personYXMiddle">
        <div class="shopCartBtn">
          <div class="shopCartBtnTop" :class="{active: isActive}" @click="gotoLogin('/login', true)">
            <span class="iconfont icon-shoujihao"></span>
            <span>手机号快捷登录</span>
          </div>
          <div class="shopCartBtnBottom" :class="{active: !isActive}" @click="gotoLogin('/login', false)">
            <span class="iconfont icon-youxiangzhanghao"></span>
            <span>邮箱帐号登录</span>
          </div>
        </div>
      </div>
      <div class="shopContainerBottom">
        <div>
          <span class="iconfont icon-weixin"></span>
            <span>微信</span>
        </div>|
        <div>
          <span class="iconfont icon-QQ"></span>
            <span>QQ</span>
        </div>|
        <div>
          <span class="iconfont icon-icon"></span>
            <span>微博</span>
        </div>
      </div>
    </div>
  </div>
    <router-view :setIsShow="setIsShow"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isActive: true,
        isShoww:true
      }
    },
    methods:{
      gotoLogin (path, isPhoneLogin) {
        this.isShow = false;
        this.isActive = !this.isActive;
        this.$router.push({path, query: {isPhoneLogin}});
      },
      setIsShow () {
        this.isActive = true;
        this.isShoww = true;
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
.mmsskk
  width 100%
  height rem(1334px)
  background-color rgba(0,0,0,0.2)
  overflow hidden
  .shopCartContainer
    overflow hidden
    width 100%
    height 100%
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
          // line-height rem(150px)
      .shopHeaderMiddle
        font-size rem(40px)
        width 100%
        line-height rem(100px)
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
    .personYX
      width 100%
      .personYXTop
        text-align center
        padding-top 2.13333rem
        padding-bottom 3.09333rem
        img
          width 3.57333rem
          height 1.2rem
      .personYXMiddle
        width rem(375px)
        height rem(110px)
        .shopCartBtn
          width 100%
          font-size rem(35px)
          .shopCartBtnTop
            width rem(700px)
            height rem(100px)
            line-height rem(100px)
            margin-left rem(28px)
            text-align center
            margin-bottom rem(40px)
            &.active
              color #fff
              background-color red
          .shopCartBtnBottom
            width rem(700px)
            height rem(100px)
            line-height rem(100px)
            background #eee
            margin-left rem(28px)
            text-align center
            &.active
              color #fff
              background-color red
      .shopContainerBottom
        position fixed
        bottom rem(120px)
        overflow hidden
        display flex
        z-index 100
        width 100%
        height rem(60px)
        align-items flex-end
        justify-content center
        span
          font-size rem(30px)
          margin 0 rem(5px)






 
</style>
