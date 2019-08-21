import { reqHeaderMock } from '../../api'

const state={
    navList:[]

}
const actions={
  async searchTabLista({commit}){
        let result = await reqHeaderMock()
        if (result.code === 0){
            commit('getReMock',result.data.Info)
        }
    }

}
const mutations={
    getReMock(state,data){
        state.navList = data
    }
    
}
const getters={

}
export default{
    state,
    actions,
    mutations,
    getters
}

