<template>
<div class="msite_nav">
    <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" width="750" >
                </div>
                <div class="swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&quality=75&thumbnail=750x0" width="750" >
                </div>
                <div class="swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/84862d10e593a9281ce0fb1ee3960b4a.jpg?imageView&quality=75&thumbnail=750x0" width="750" >
                </div>
                <div class="swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" width="750" >
                </div>
                <div class="swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/84862d10e593a9281ce0fb1ee3960b4a.jpg?imageView&quality=75&thumbnail=750x0" width="750" >
                </div>
                <div class="swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" width="750" >
                </div>
            </div>
        <div class="swiper-pagination"></div>
        </div>
</div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
  export default {
      mounted(){
          new Swiper('.swiper-container',{
            direction: 'horizontal',
            loop: true,
            autoplay: true, // 自动轮播
      })
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../../common/stylus/mixins.styl"
.msite_nav
    margin-top rem(150px)
    .swiperWrap
      width 100%
      height 100%
      .swiper-wrapper
        height 100%
        width 100%
        .swiper_slide
          width 100%
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774
</style>
