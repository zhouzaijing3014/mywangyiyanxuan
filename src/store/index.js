/**
 * vuex 的核心js模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import home from './modules/home'
import categorys from './modules/categorys'
import search from './modules/search'
Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
    getters,
    modules:{
      home,
      categorys,
      search
    }
})

