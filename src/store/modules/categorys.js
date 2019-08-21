import {  reqCategoryData } from '../../api'

const state = {
    cateGotyList:[],
    cateGoty:[],

}
const actions = {
   async getCategoryList({commit}){
        let result =await reqCategoryData()  //调用接口请求函数
        if(result.code === 0){
            commit('getCateGotyList',result.data)
        }
    } 
}
const mutations= {
    getCateGotyList(state,data){
        state.cateGotyList = data 
    }
}
const getters ={

}
export default{
    getters,
    actions,
    mutations,
    state
}