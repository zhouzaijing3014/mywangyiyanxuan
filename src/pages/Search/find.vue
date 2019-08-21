<template>
  <div  class="findContainer">
      <!-- 头部导航 -->
      <div class="header-nav" ref="headerNav" >
        <ul class="header-nav-left" ref="leftheaderNavtwo">
          <li v-for="(item, index) in navList" :key="index" :class="{'active': isActive==index}" @click="changeNav(index)"> 
            <!-- <router-link :to="{path: '/search'}">{{item.tabName}}</router-link> -->
            <a href="">{{item.tabName}}</a>
          </li>
        </ul>
      </div>
      <!-- 内容 -->
      <div class="find-content-wrapper" ref="wrapper">
        <div class="find-content">
          <!-- 头部框 -->
          <div class="find-content-header">
            <div class="find-content-header-left">
              <i class="iconfont icon-home find-homeIcon"></i>
            </div>
            <div class="find-content-header-middle">
              <img
                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
                alt
              />
            </div>
            <div class="find-content-header-right">
              <a href="/search">
                <i class="iconfont icon-search slot-search"></i>
              </a>
              <a href="/search/zhenxuan">
                <i class="iconfont icon-cart slot-shopcart"></i>
              </a>
            </div>
          </div>
          <!-- 主体内容 -->
          <div class="find-content-box">
            <!-- 内容简介 -->
            <div class="findImg">
              <img class="onceImg" src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt />
              <img
                class="twiceImg"
                src="https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344"
                alt
              />
              <img class="thridImg" src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt />
            </div>
            <!-- 内容轮播图 -->
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/15640224029953333.jpg" alt="实时热销top100" />
                </div>
                <div class="swiper-slide">
                  <img
                    src="https://mimg.127.net/hz/uploader/20190802/15647346338570519.jpg"
                    alt="2019新品发布会"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="https://mimg.127.net/hz/uploader/20190802/15647346335080518.jpg"
                    alt="愚人不如悦己"
                  />
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/15651700346213301.jpg" alt="福利站" />
                </div>
                <div class="swiper-slide">
                  <img
                    src="https://mimg.127.net/hz/uploader/20190729/15643681791925643.jpg"
                    alt="春季四件套换新"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="https://mimg.127.net/hz/uploader/20190806/15650581426442202.jpg"
                    alt="护理好物集"
                  />
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
            <div class="findInfo-img">
                <img src="https://yanxuan.nosdn.127.net/15645393458728772.jpeg" alt="">
                <img  src="https://yanxuan.nosdn.127.net/15640407915873725.png" alt="">
            </div>
            <!-- 抢购部分 -->
            <div class="findShop">
                <div class="shop-one">
                    <img src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
                    <span class="one-border">6包/提  谷风...</span>
                    <span>￥16</span>
                    <button>立即抢购</button>
                </div>
                <div class="shop-two">
                    <img src="https://yanxuan-item.nosdn.127.net/f9f37332e201eee130e1a0a7e311608e.png?imageView&thumbnail=200x200&quality=95" alt="">
                    <span class="one-border">新人专享</span>
                    <span>￥49.9</span>
                    <button>立即抢购</button>
                </div>
                <div class="shop-three">
                    <img src="https://yanxuan-item.nosdn.127.net/df03eaa6d957998728e3c425b900401e.png?imageView&thumbnail=200x200&quality=95" alt="">
                    <span class="one-border">新人专享</span>
                    <span>￥49.9</span>
                    <button>立即抢购</button>
                </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { mapState } from "vuex";
import Swiper from 'swiper'
export default {
   props: ['searchTabList'],
    data() {
      return {
        isActive:0,
        // navList:[]
      }
    },
  computed: {
     ...mapState({
       navList:state=>state.search.navList
    }) 
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getSearchData");
    });
    this._initScroll1();
    this._initScroll2();
    this._initSwiper();
  },
  methods: {
    
    changeNav(index){
      this.isActive = index
    },
    _initScroll1() {
      let width = 0;
      // for (let i = 0; i < this.homeShopList.length; i++) {
      //   width+=this.$refs.headerNav[0].getBoundingClientRect().width//getBoundingClientRect返回元素大小及其相对于视口的位置
      // };
      this.$refs.headerNav.style.width = width + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.headerNav, {
            startX: 0,
            click: true,
            scrollX: true
            // scrollY: false,
            // eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    _initScroll2() {
      this.$nextTick(() => {
        if (!this.Scroll) {
          this.Scroll = new BScroll(this.$refs.wrapper, {
            click: true, // 配置允许点击事件
            scrollY: true // 开启纵向滚动
          });
        } else {
          this.Scroll.refresh(); // 重新计算 better-scroll，当 DOM 结构发生变化的时确保滚动效果正常
        }
      });
    },
    _initSwiper() {
      new Swiper(".swiper-container", {
        loop: true,
        effect: "coverflow",
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        },
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.findContainer{
   height: 100%;
   width: 100%;
   overflow hidden
}
 .header-nav {
    position: relative;
    width: 100% !important
    height: 80px;
    // overflow: hidden;
    // border-bottom: 2px solid plum;
    .header-nav-left {
      width: 1000px !important
      // width:100%
      // display flex
      float left
      font-size: 30px
      height: 40px
      padding-top: 18px
      li {
        float: left
        height: 54px
        // margin: 5px 20px;
        padding: 0 10px
        text-align: center
        a {
          color: #666;
        }
        &.active {
          border-bottom: 4px solid $red;
          a {
            color: red;
          }
        }
      }
    }
  }
  /* 内容 */
  .find-content-wrapper {
    width: 100%;
    height: 1054px;
    overflow: hidden;
    .find-content {
      width: 100%;
      height: 2000px;
      background: #fafafa;
      margin: 0 auto;
      // overflow hidden
      border-bottom: 1px solid #ccc;
      .find-content-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // padding: 14px 25px 0px 25px;
        i {
          font-size: 48px;
        }
      }
      .find-content-box {
        width: 100%;
        height: 100%;
        margin-top: 20px;

        .findImg {
          .onceImg {
            width: 100%;
            height: 242px;
          }
          .twiceImg {
            width: 100%;
            height: 354px;
          }
          .thirdImg {
            width: 100%;
            height: 170px;
          }
        }
        .swiper-container {
          .swiper-wrapper {
            .swiper-slide {
              img {
                width: 100%;
                height: 370px;
                object-fit: cover;
              }
            }
          }
          .swiper-pagination-bullet {
            width: 80px;
            height: 6px;
            border-radius: 16px;
            background: rgb(255, 255, 255);
          }
          .m-slide .swiper-pagination-bullet-active {
            background: rgb(255, 255, 255);
            opacity: 1;
          }
        }
        .findInfo-img{
          width 100%
          height 340px
          img{
            width 100%
            height 170px
          }
        }
        .findShop{
          width 750px
          height 339px
          background #95d0a2
          display flex
          // flex-wrap wrap-reverse
          // flex-direction column
          align-items center
          
          img{
              width 215px
              height 200px
              margin-bottom 12px
              border-radius 10px
              margin-left 1px
            }
            .one-border{
              font-size 20px
              color #333 
              margin-left 52px
              font-weight normal
            }
            button{
              width 160px
              height 42px
              background #dc4516
              color white
              font-size 24px
              border-radius 30px
              border none
              margin-top 8px
              margin-left 29px
            }
            span{
              color red
              font-size 30px
              font-weight bold
              margin-left 68px
            }
            div{
              justify-content space-around
              background white
              margin 18px
              border-radius 20px
            }
        }
        .findInfo-img-two{
          width 100%
          height 340px
          img{
            width 100%
            height 170px
          }
        }
        
      }
    }
  }

</style>
