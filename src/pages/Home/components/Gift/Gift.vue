<template>
<div class="middleContainer">
    <div class="gifGroup">
        <ul class="gifItems">
            <li class="gifItem" v-for="(item, index) in kingKongList" :key="index">
                <a :href="item.schemeUrl">
                    <img class="newImg" :src="item.picUrl">
                    <span class="newSpan">{{item.text}}</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="middleNav">
        <a href="javascript:">
            <img class="" src="https://yanxuan.nosdn.127.net/a55393ea2c010bd73f0666e2ffca8d55.gif" >
        </a>
    </div>
    <div class="middleSprice">
        <ul class="middleSprice_items">
            <li class="middleSprice_item">
                <div class="middleSprice_big">9.9超值专区首发</div>
                <div class="middleSprice_small">180款爆款新定价</div>
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" >
            </li>
            <li class="middleSprice_item">
                <div class="middleSprice_big">9.9超值专区首发</div>
                <div class="middleSprice_small">180款爆款新定价</div>
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" >
            </li>
            <li class="middleSprice_item">
                <div class="middleSprice_big">9.9超值专区首发</div>
                <div class="middleSprice_small">180款爆款新定价</div>
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" >
            </li>
            <li class="middleSprice_item">
                <div class="middleSprice_big">9.9超值专区首发</div>
                <div class="middleSprice_small">180款爆款新定价</div>
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" >
            </li>
        </ul>
    </div>
    <p class="blackLine"></p>
    <div class="moduleTitle">
        <span>私人定制</span>
    </div>
    <div class="moduleTitle_swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <ul class="swiper-slide" v-for="(personShopItems, index) in personals" :key="index">
                    <ul class="moduleTitle_swiper_items">
                        <li class="moduleTitle_swiper_item" v-for="(item, index) in personShopItems" :key="index">
                            <img :src="item.listPicUrl" >
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                </ul>
                <!-- <div class="swiper-slide">
                    <ul class="moduleTitle_swiper_items">
                        <li class="moduleTitle_swiper_item">
                            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" >
                            <p>嘎日个爱国个人阿嘎</p>
                        </li>
                        <li class="moduleTitle_swiper_item">
                            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" >
                            <p>嘎日个爱国个人阿嘎</p>
                        </li>
                        <li class="moduleTitle_swiper_item">
                            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" >
                            <p>嘎日个爱国个人阿嘎</p>
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide">
                    <ul class="moduleTitle_swiper_items">
                        <li class="moduleTitle_swiper_item">
                            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" >
                            <p>嘎日个爱国个人阿嘎</p>
                        </li>
                        <li class="moduleTitle_swiper_item">
                            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" >
                            <p>嘎日个爱国个人阿嘎</p>
                        </li>
                        <li class="moduleTitle_swiper_item">
                            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" >
                            <p>嘎日个爱国个人阿嘎</p>
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide">
                    <ul class="moduleTitle_swiper_items">
                        <li class="moduleTitle_swiper_item">
                            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" >
                            <p>嘎日个爱国个人阿嘎</p>
                        </li>
                        <li class="moduleTitle_swiper_item">
                            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" >
                            <p>嘎日个爱国个人阿嘎</p>
                        </li>
                        <li class="moduleTitle_swiper_item">
                            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" >
                            <p>嘎日个爱国个人阿嘎</p>
                        </li>
                    </ul>
                </div> -->
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <p class="blackLine"></p>
    <div class="timeContainer">
        <div class="time">
            <span class="timeSpan">限时购</span>
            <div class="timeContent">
                <span class="hours">{{hour &lt; 10 ? '0' + hour : hour}}</span>
                <span class="point">:</span>
                <span class="mins">{{minute &lt; 10 ? '0' + minute : minute}}</span>
                <span class="point">:</span>
                <span class="secs">{{second &lt; 10 ? '0' + second : second}}</span>
            </div>
            <a class="timeMore" href="http://m.you.163.com/item/list?categoryId=1008000&style=pd">更多></a>
        </div>
        <div class="timeContainerSwiper">
            <ul class="timeContainerSwiperItems">
                <li class="timeContainerSwiperItem" v-for="(item, index) in quanqiugou" :key="index">
                    <img :src="item.picUrl">
                    <span class="timePriceItems">
                        <span class="timePriceItemT">{{item.originPrice}}￥</span>
                        <span class="timePriceItemB">{{item.activityPrice}}￥</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
    <p class="blackLine"></p>
    <div class="newContainer">
        <div class="newContent">
            <span class="newS">新品首发</span>
            <a class="newMore" href="http://m.you.163.com/item/list?categoryId=1008000&style=pd">更多></a>
        </div>
        <div class="newContainerBox">
            <ul class="newContainerItems">
                <li class="newContainerItem" v-for="(item, index) in getNewItem" :key="index">
                    <div class="newKeywords">
                        <img class="newKeywordsImg" :src="item.listPicUrl">
                        <ul class="keyWords">
                            <li class="keywordEver">
                                <span>3</span>
                                <span>色</span>
                                <span>可</span>
                                <span>选</span>
                            </li>
                        </ul>
                    </div>
                    <span class="keyWordsPrice">
                        <span class="keyWordsPriceT">{{item.simpleDesc}}</span>
                        <div class="keyWordsPriceTB">
                            <span class="keyWordsPriceTBA">{{item.name}}</span>
                            <span class="keyWordsPriceTBB">￥{{item.retailPrice}}</span>
                        </div>
                        <span class="keyWordsPriceB">{{item.promTag}}</span>
                    </span>
                </li>         
            </ul>
        </div>
    </div>
    <p class="blackLine"></p>
</div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
        data () {
        return {
            hour: 2,
            minute: 59,
            second: 59
        }
        },
      computed:{
          ...mapState({kingKongList:state=>state.home.navList}),
          ...mapState({personalShop:state=>state.home.componentfour}),
          ...mapState({quanqiugou:state=>state.home.quanqiugou}),
          ...mapState({newItemList:state=>state.home.newItemList}),
              getNewItem () {
                return [...this.newItemList].splice(2,8);
            },
          personals() {    //切割对象1-4
            // console.log(this.kingKongList)
            const bigarr = [];
            let smallarr = [];
            const { personalShop } = this;
            personalShop.forEach(item => {
                if (smallarr.length === 0) {
                bigarr.push(smallarr);
                }
                smallarr.push(item);
                if (smallarr.length === 3) {
                smallarr = [];
                }
            });
            // console.log(bigarr);
            return bigarr;
            }
      },
      
      mounted () {
        this._timeDown();
        },
      methods:{
        
          _timeDown () {
            this.intervalId = setInterval(() => {
            // 当秒数减至小于0时，重新置为59 同时分钟数减1
            if (this.second > 0) {
                // 秒数大于0时，秒数减1
                this.second--;
            } else {
                // 秒数小于0或者等于0时
                if (this.minute) {
                // 如果分钟数有值，则重置秒数，同时分钟数减1
                this.second = 59;
                this.minute--;
                // 如果小时数为0 则当分钟数减至0时，直接设为0
                if (this.minute <= 0 && this.hour === 0) {
                    this.minute = 0;
                }
                } else if (this.hour) {
                // 如果分钟数为0而小时数不为0  即 x:0:xx 则秒数和分钟数均置为初始值 同时小时数减1
                this.second = 59;
                this.minute = 59;
                this.hour--;
                if (this.hour <= 0) {
                    // 小时数减至0时，直接设为0
                    this.hour = 0;
                }
             }
          }

          if (!this.hour && !this.minute && !this.second) {
            // 秒数/分钟数/小时数全都不大于0时，停止计时器
            clearInterval(this.intervalId);
          }
          // 当分钟数减至小于0时，重置为59 同时小时数减1
        }, 1000);
      }
    },
    beforeDestroy () {
      clearInterval(this.intervalId);
    }
   
      
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../../common/stylus/mixins.styl"
.middleContainer
  .gifGroup
    width 100%
  .gifItems
    display flex
    flex-wrap wrap
    .gifItem
      width rem(150px)
      height rem(156px)
      text-align center
      position relative
      .newImg
        width rem(110px)
        height rem(110px)
      .newSpan
        position: absolute
        bottom rem(10px)
        left rem(30px)
        font-size rem(20px)
        text-align center
  .middleNav
    width 100%
    margin-top rem(10px)
    img
      width 100%

  .middleSprice
    width 100%
    .middleSprice_items
      display flex
      flex-wrap wrap
      padding rem(10px) rem(20px)
      .middleSprice_item
        border rem(1px) solid white
        padding rem(20px) 0 0  rem(20px)
        background-color:#ccc
        .middleSprice_big
          width rem(330px)
          font-size rem(32px)
          font-family "微软雅黑"
        .middleSprice_small
          font-size rem(24px)




  .blackLine
    box-sizing border-box
    width 100%
    height 0
    border rem(8px) solid #ccc
  .moduleTitle
    box-sizing border-box
    width 100%
    height rem(100px)
    padding 0 rem(20px)
    span
      font-size rem(32px)
  .moduleTitle_swiper
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          .moduleTitle_swiper_items
            display flex
            margin-bottom rem(100px)
            .moduleTitle_swiper_item
              display flex
              position: relative
              flex-direction column
              margin-left  rem(20px)
              img
                width rem(216px)
                height rem(216px)
                background: #ccc
              p
                position absolute
                font-size rem(24px)
                bottom rem(-90px)
                margin-bottom rem(10px)
                padding rem(10px)
                overflow visible
                white-space normal
                line-height rem(36px)
  .timeContainer
    width 100%
    .time
      position: relative
      width 100%
      height rem(100px)
      .timeSpan
        font-size rem(32px)
        margin-left rem(20px)
        //display flex
      .timeContent
        display inline-block
        span
          width rem(36px)
          height rem(36px)
          background: #000
          font-size rem(26px)
          color white
          border-radius rem(6px)
        .point
          background: #ccc
          color black
      .timeMore
        position: absolute
        right rem(30px)
        top rem(30px)
        font-size rem(36px)
        color black
        font-family  "宋体"
    .timeContainerSwiper
      .timeContainerSwiperItems
        display flex
        justify-content space-around
        box-sizing border-box
        margin-left rem(16px)
        flex-wrap wrap
        .timeContainerSwiperItem
          //display flex
          //flex-direction column
          margin-right .26667rem
          padding-bottom .4rem;
          img
            width rem(216px)
            height rem(216px)
            background: pink
          .timePriceItems
            display flex
            vertical-align text-bottom
            width rem(216px)
            .timePriceItemT
              font-size rem(28px)
              font-family: PingFangSC-Light,helvetica,'Heiti SC'
            .timePriceItemB
              font-size rem(24px)
              font-family: PingFangSC-Light,helvetica,'Heiti SC'
              text-decoration: line-through




  .newContainer
    display flex
    flex-direction column
    .newContent
      width 100%
      height rem(100px)
      position: relative
      .newS
        font-size rem(32px)
        margin-left rem(20px)
      .newMore
        position: absolute
        right rem(30px)
        top rem(30px)
        font-size rem(36px)
        font-family: "宋体"
    .newContainerBox
      .newContainerItems
        display flex
        flex-wrap wrap
        .newContainerItem
          padding 0 0 rem(20px)
          margin-left rem(26px)
          .newKeywords
            width 100%
            .newKeywordsImg
              width rem(216px)
              height rem(216px)
              background: #ccc
            .keyWords
              position relative
              .keywordEver
                position: absolute
                bottom rem(120px)
                display flex
                flex-direction column
                justify-content center
                width rem(32px)
                border rem(1px) solid green
                text-align center
                margin-left rem(20px)
                margin-bottom  rem(-10px)
                span
                  font-size rem(24px)
                  color #CE2424
          .keyWordsPrice
            display flex
            flex-direction column
            .keyWordsPriceT
              width rem(216px)
              font-size rem(24px)
            .keyWordsPriceTB
              display flex
              width rem(216px)
              .keyWordsPriceTBA
                font-size rem(24px)
                margin rem(5px) 0
              .keyWordsPriceTBB
                font-size rem(24px)
                color red
            .keyWordsPriceB
              width rem(125px)
              color red
              font-size rem(24px)
              border rem(2px) solid red
              border-radius rem(10px)




</style>
