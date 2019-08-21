<template>
<div class="categoryRight">
   <div class="cateContainer">
        <div class="swiper-container">
            <ul class="swiper-wrapper">
            <li class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/a97ca145b7e9ad2f89bdb096691ca0f4.jpg?imageView&quality=75&thumbnail=0x196">
            </li>
            <li class="categorySwiperItem">
                <img src="https://yanxuan.nosdn.127.net/25d770a02a3ef0aa3ba0e94857a9187f.jpg?imageView&quality=75&thumbnail=0x196">
            </li>
            </ul>
        </div>
    <div class="pictorContainer">
        <ul class="pictorContainerItems">
            <div class="goodsFood">精选</div>
            <li class="pictorContainerItem"    v-for="(item, index) in splisArr" :key="index">
                <img :src="item.bannerUrl" >
                <span>{{item.name}}</span>
            </li>
        
        </ul>
    </div>
    
   </div>
</div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
      props:{
        isIndex:Number
      },
      computed:{
          ...mapState({category:state=>state.categorys.cateGotyList.categoryL1List}),
          splisArr(){
            const arr=[]
            const BigArr=[]
            this.category.forEach(items => {
              arr.push(items.subCateList)
            });
            arr[this.isIndex].forEach((item)=>{
              BigArr.push(item)
            })
            return BigArr
          }
      },
      mounted(){
          
           new BScroll(".categoryRight",{
            scrollY: true,
            click: true
           });
           new Swiper('.swiper-container',{
            direction: 'horizontal',
            loop: true,
            autoplay: true, // 自动轮播

      })
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../../common/stylus/mixins.styl"
  .categoryRight
      margin-right rem(10px)
      width rem(530px)
      height rem(1120px)
      color red
      overflow hidden
      .pictorContainer
        display bolck
        width 100%
        .pictorContainerItems
          display flex
          justify-content start
          flex-wrap wrap
          .goodsFood
            font-size rem(28px)
            width 100%
            color blue
            font-weight 700
            height rem(50px)
            line-height rem(50px)
            padding  rem(10px) 0
            border-bottom rem(1px) solid #ccc
          .pictorContainerItem
            display flex
            flex-direction column
            // margin 0 rem(6px)
            img
              width rem(144px)
              height rem(144px)
            span
              display inline-block
              width 170px
              font-size 24px
              text-align center
</style>
