<template>
  <header class="header_box">
    <div class="header_search">
      <img  :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png'" alt="网易严选">
      
      <div class="search_box" @click="$router.push('/searchfor')">
        <img :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png'" alt="放大镜">
        <span class="placeholder">
          搜索商品，共21726件好物
        </span>
      </div>
      
      <span class="login_btn" @click="$router.push('/profile')">
        登录
      </span>
    </div>
    
    <div class="header_nav">
      <div class="left_ul_box">
        <ul class="left_ul clearfix">
          <li :class="{isShow:isShow===-1}"  @click="btnClick(-1)"><a  href="javascript:">推荐</a></li>
          <li v-for="(item, index) in kingKongList" :key="index" :class="{isShow:isShow===index}"  @click="btnClick(index)"><a  href="javascript:">{{item.text}}</a></li>
        </ul>
      </div>
      <div class="right_span">
        <span class="linear"></span>
        <div class="img_box">
          <img :class="{is_open: isOpen}" @click="isOpen=!isOpen" :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png'" alt="展开"/>
        </div>
      </div>
      <div class="all_nav_box" v-show="isOpen">
        <p>全部频道</p>
        <ul class="all_nav clearfix" ref="allNav">
          <li :class="{isBlock:isShow===-1}"  @click="btnClick(-1)"><a href="javascript:">推荐</a></li>
          <li v-for="(item, index) in kingKongList" :key="index" :class="{isBlock:isShow===index}"  @click="btnClick(index)"><a href="javascript:">{{item.text}}</a></li>
        </ul>
        <div class="mask"></div>
      </div>
    </div>
  </header>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'HeaderNav',
    data () {
      return {
        isOpen: false,
        isShow: -1
      }
    },
    computed:{
      ...mapState({kingKongList:state=>state.home.navList})
    },
    mounted () {
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll = new BScroll(".left_ul_box", {
            click: true,
            scrollX: true
          })
        }else{
          this.bScroll.refresh()
        }
      })
    },
    methods: {
      // addActive (e) {
      //   this.curA = +e.target.dataset.thisIndex
      // }
      btnClick(index){
        this.isShow = index*1
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .header_box
    width 100%
    position fixed
    top 0
    left 0
    z-index 200
    .header_search
      position: relative;
      z-index: 2;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      background: #fff;
      padding: 8px 15px;
      >img
        width 138px
        height 40px
        display: inline-block;
        margin-right: 10px;
        background-size: cover;
        background-position: center;
      .search_box
        display flex;
        flex-grow 1
        flex-flow row nowrap
        -webkit-box-align: center
        align-items center
        -webkit-box-pack center
        justify-content center
        height 56px
        font-size 28px
        background-color #ededed
        border-radius 4px
        color #666
        >img
          display inline-block
          vertical-align: middle
          width 28px
          height 28px
          margin-right 5px
      .login_btn
        width 76px
        height 42px
        line-height 42px
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius 4px
        margin-left: 8px
        font-size 24px
    .header_nav
      width 100%
      height: 75px;
      position relative
      z-index 2
      margin-top -1px
      background #fff
      .left_ul_box
        width 100%
        overflow hidden
        >.left_ul
          float left
          padding-right 150px
          display flex
          >li
            display flex
            justify-content center
            align-items center
            box-sizing border-box
            padding 0 16px
            text-align center
            color #333
            font-size 28px
            line-height 60px
            width 150px
            &.isShow
              color red
              border-bottom 3px solid red
            a.active
              box-sizing border-box
              min-width 90px
              color $themeColor
              border-bottom 6px solid $themeColor
      .right_span
        display flex
        flex-grow 0
        align-items center
        justify-content center
        position absolute
        top 0
        right 0
        z-index 2
        .linear
          width 6px
          height 6px
          background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
        .img_box
          width 100px
          height 60px
          text-align center
          background #fff
          display: flex;
          justify-content: center;
          align-items: center;
          >img
            width 28px
            height 28px
            transition transform 300ms linear
            &.is_open
              transform rotateZ(180deg)
      .all_nav_box
        position absolute
        top 0
        left 0
        width 100%
        background-color #fff
        >p
          height: 60px;
          padding-left: 30px;
          font-size: 28px;
          display flex
          align-items center
        .all_nav
          display flex
          flex-wrap wrap
          justify-content flex-start
          padding-left 15px
          li
            width 165px
            margin 7.5px
            padding 0 16px
            box-sizing border-box
            font-size 28px
            line-height 60px
            color #333
            background-color: #fafafa
            border 2px solid $borderBgc
            border-radius 8px
            display flex
            align-items center
            justify-content center
            &.isBlock
              background red
             
      .mask
        width 100%
        height 100%
        background-color rgba(0, 0, 0, .5)
            
</style>
