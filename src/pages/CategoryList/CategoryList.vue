<template>
  <div class="categoryContainer">
    <div class="category">
      <div class="nav_search" @click="$router.replace('/searchfor')">
          <span class="iconfont icon-fangdajing1" ></span>
          <span class="placeHolder">搜索商品,共21615款好物</span>
      </div>
    </div>
    <div class="categoryBottomContainer">
      <div class="categoryLeft">
        <ul class="categoryItems">       
          <li class="categoryItem" :class="{block:isIndex===index}" @click="returnBtn(index)" v-for="(item, index) in categoryList" :key="index"><a href="javascript:">{{item.name}}</a></li>
        </ul>
      </div>
      <Category :isIndex="isIndex"/>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Category from './Category/Category.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        isIndex:0,
      }
    },
    methods:{
      returnBtn(index){
          this.isIndex = index 

      }
    },
    computed:{
      ...mapState({categoryList:state=>state.categorys.cateGotyList.categoryL1List})
    },
    mounted(){
         new BScroll(".categoryLeft",{
          scrollY: true,
          click: true
      });
    },
    components:{
        Category
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
.categoryContainer
  overflow hidden
  width 100%
  .category
    padding-bottom rem(10px)
    border-bottom rem(1px) solid #ccc
    .nav_search
      display flex
      align-items center
      background-color: #eee
      border-radius rem(10px)
      position relative
      width 90%
      top 0.093333rem
      right -0.4rem
      margin rem(12px) rem(10px)
      .iconfont
        font-size rem(40px)
        color red
        width rem(40px)
        height rem(40px)
        margin rem(10px)
        margin-left rem(140px)
        margin-top rem(20px)
      .placeHolder
        font-size rem(30px)
  .categoryBottomContainer
    width 100%
    height 100%
    display flex
    .categoryLeft
      position relative
      left 0
      width rem(162px)
      height rem(1190px)
      overflow hidden
      margin-right rem(30px)
      .categoryItems
        display flex
        flex-direction column
        font-size rem(30px)
        .categoryItem
          display block
          height rem(60px)
          text-align center
          line-height rem(60px)
          margin rem(20px) rem(0)
          &.block
            border-left rem(6px) solid red
    // .categoryRight
    //   margin-right rem(10px)
    //   width rem(530px)
    //   height rem(1120px)
    //   color red
    //   .pictorContainer
    //     display bolck
    //     width 100%
    //     .pictorContainerItems
    //       display flex
    //       justify-content start
    //       flex-wrap wrap
    //       .goodsFood
    //         font-size rem(28px)
    //         width 100%
    //         color blue
    //         font-weight 700
    //         height rem(50px)
    //         line-height rem(50px)
    //         padding  rem(10px) 0
    //         border-bottom rem(1px) solid #ccc
    //       .pictorContainerItem
    //         display flex
    //         flex-direction column
    //         margin 0 rem(16px)
    //         img
    //           width rem(144px)
    //           height rem(144px)
    //         span
    //           display inline-block
    //           font-size 24px
    //           text-align center
</style>
