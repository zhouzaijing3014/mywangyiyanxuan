import ajax from './ajax'
import  axios from 'axios'
const BASE = '/api'
const BASETWO = '/aaa'

//获取首页数据
export const reqHomeData = ()=> ajax('/home')

//获取分类数据
export const reqCategoryData = ()=> ajax('/categoryList')

//获取mock导航数据
export const reqHeaderMock = () => ajax('/aaa')

// 发送短信验证码
// export const reqSendCode = (phone) => ajax({
//     method: 'GET',
//     url: BASE + '/sendcode',
//     params: { phone }
//   })
  
  // 用户名密码登陆
  export const reqPwdLogin = ({ name, pwd, captcha }) => axios({
    method: 'POST',
    url: BASE + '/login_pwd',
    data: {
      name,
      pwd,
      captcha
    }
  })
  //请求搜索关键字
  export const reqKeyWords = (keyword)=> axios({
    method:'GET',
    url: `${BASETWO}/xhr/search/searchAutoComplete.json?keywordPrefix=${keyword}`
  })
 console.log(reqKeyWords(1),"111")