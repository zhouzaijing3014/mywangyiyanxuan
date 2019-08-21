<template>
  <div class="search-container">
    <!-- 头部 -->
    <!-- <HeaderSlot>
      <div class="header-title" slot="headerTitle">
        <span @click="tabChange('found')" :class="{'on': 'found' == tabFlag}">发现</span>
        <span @click="tabChange('selection')" :class="{'on': 'selection' == tabFlag}">甄选家</span>
      </div>
    </HeaderSlot> -->
    <headerTen/>
    <router-view/>
    <!-- 发现 -->
    <div v-if="'found' == tabFlag">
      <Find :searchTabList="searchTabList"/>
    </div>
    <!-- 甄选家 -->
    <div v-if="'selection' == tabFlag">
      <Zhenxuan />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Zhenxuan from './zhenxuan.vue'
import Find from './find.vue'

export default {
  data() {
    return {
      tabFlag:'found'
    };
  },
  components:{
    Find,
    Zhenxuan
  },
  methods: {
    tabChange(e){
      this.tabFlag = e
    },
  },
  computed: {
    ...mapState({
      searchTabList: state => state.searchTabList
    })
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$store.dispatch("getSearchData");
    // });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl';

/* 头部 */
.search-container {
  background:#fafafa;
  height: 100%;
  width: 100%;
  .header-title {
    position: absolute;
    width: 3.2rem;
    height: 100%;
    line-height: 100px;
    text-align: center;
    left: 55%;
    top: -7px;
    margin-left: -10px;
    font-size: 30px;
    color: #7F7F7F;
    z-index: 1;
    span {
      font-size: 30px;
      color: #666;
      &.on {
        color: $red;
        font-size: 40px;
        font-weight: bold;
      }
    }
  }
/* 头部导航 */
 
}
</style>
