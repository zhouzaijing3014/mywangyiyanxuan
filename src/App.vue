<template>
  <div>
      <router-view/>
      <Footer v-show="$route.meta.isShoww"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from "../src/components/Footer/Footer.vue"
  // import CategoryList from './pages/CategoryList/CategoryList.vue'

  export default {
      components:{
          Footer,
          // CategoryList
      },
      mounted(){
        this.$store.dispatch('getTabList'),   //提交首页中的数据
        this.$store.dispatch('getCategoryList')//提交categoryList中的数据
        this.$store.dispatch('searchTabLista')  //提交nav导航数据
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
