<template>
  <div>
     <Nav/>
     <Container/>
     <Swiper/>
     <InnerNav/>
     <Gift/>
  </div>
</template>

<script type="text/ecmascript-6">
import Nav from './components/Nav/Nav.vue';
import Swiper from './components/Swiper/Swiper.vue';
import InnerNav from './components/InnerNav/InnerNav.vue';
import Gift from './components/Gift/Gift.vue';
import Container from './components/Container/Container.vue';

  export default {
    components:{
      Nav,
      Swiper,
      InnerNav,
      Gift,
      Container
      
    },
   
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >

 
</style>
