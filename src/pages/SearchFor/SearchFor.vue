<template>
<div>
  <div class="app">
    <div class="appwarp">
        <div class="appwarpheader">
            <div class="appseachinput1">
                <i class="iconfont icon-sousuo" ></i>
                <input type="text" class="appseachinput2" placeholder="嗨" v-model="value">
            </div>
            <span class="deltext" @click="$router.back()">取消</span>
        </div>
        <header class="appwarheaderlogo">热门搜索</header>
        <div class="appwarpnav">
          <ul>
            <li class="aa" v-for="(item, index) in shuju.data" :key="index">{{item}}</li>
          </ul>
            <!-- <a href="javascript:;" class="red">爆款 行李箱</a>
            <a href="javascript:;">香氛牙膏 谈吐芳香</a>
            <a href="javascript:;">轻弹云朵拖鞋9.9元</a>
            <a href="javascript:;">爆款 行李箱</a>
            <a href="javascript:;">爆款 行李箱</a>
            <a href="javascript:;">爆款 行李箱</a>
            <a href="javascript:;">爆款 行李箱</a> -->

        </div>
    </div>
</div>
<div class="seachzhezhao"></div>
</div>
</template>
<script type="text/ecmascript-6">
import {reqKeyWords} from '../../api'
import { setTimeout, clearTimeout } from 'timers';
  export default {
    data(){
      return{
        value:'',
        shuju:{},

      }
    },
     mounted(){
      
    },
   
    
    computed:{
     
    },
    watch:{
      value(){ 
        clearTimeout(this.timer)
        this.timer=  setTimeout(async() => {
        const shujuT=await reqKeyWords(this.value)
         console.log(shujuT)
         this.shuju = shujuT.data  
           }, 1000);
 
     

        
       
      }
      
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.app
  width 100%
  height 100%
  background #eee
  .appwarp
    background white
    width 100%
    .appwarpheader
      padding 0 rem(30px)
      height rem(89px)
      display flex
      align-items center
      justify-content center
      .iconfont
        font-size rem(35px)!important
        padding-right 12px
      .appseachinput1
        background #F4F4F4
        display flex
        align-items center
        justify-content center
        width rem(604px)
        height rem(54px)
        .appseachinput2
          outline none
          width rem(520px)
          height rem(39px)
          font-size rem(30px)
          background #F4F4F4
      .deltext
        font-size rem(30px)
        padding-left rem(16px)
    .appwarheaderlogo
      box-sizing border-box
      font-size rem(30px)
      padding 0 rem(30px)
      width 100%
      height rem(90px)
      line-height rem(90px)
    .appwarpnav
      background-color white
      font-size rem(26px)
      padding 0 rem(30px)
      .aa
        height rem(47px)
        display inline-block
        text-align center
        line-height rem(47px)
        color #000000
        padding 0 12px
        border 1px solid #000000
        margin 0 rem(32px) rem(32px) 0
        &.red
          color red
          border  1px solid red
.seachzhezhao
  background #eeeeee
  width 100%
  height 100%
  position fixed
 
</style>
