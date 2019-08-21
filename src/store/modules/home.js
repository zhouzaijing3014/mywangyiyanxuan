 import {  reqHomeData } from '../../api'
 
 
 const  state = {

    homeData:[], //网上自营品牌
    navList: [], // 导航列表
    componentfour:[],//私人定制 有轮播
    quanqiugou:[],//全球购
    newItemList:[]
 } 


 
 const actions={
     async getTabList({commit}){
        let result = await reqHomeData() //调用借口请求函数
        if(result.code ===0 ){
            commit('commitTabList',result.data.policyDescList)
            commit('receiveNavList',result.data.kingKongModule.kingKongList)
            commit('persondingzhi',result.data.personalShop)
            commit('personlowerTime',result.data.flashSaleModule.itemList)
            commit('newItemList',result.data.newItemList)
        }
     }
 }



 const mutations={
    commitTabList(state,data){
        state.homeData = data  
    } ,
    receiveNavList(state,data){
        state.navList = data  
    } ,
    persondingzhi(state,data){
        state.componentfour = data
    },
    personlowerTime(state,data){
        state.quanqiugou = data
    },
    newItemList(state,data){
        state.newItemList = data
    }



}


 const getters = {

 }



 export default {
    getters,
    actions,
    mutations,
    state
 }