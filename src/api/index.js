import ajax from './ajax'


//获取首页数据
export const reqHomeData = ()=> ajax('/home')

//获取分类数据
export const reqCategoryData = ()=> ajax('/categoryList')

//获取mock导航数据
export const reqHeaderMock = () => ajax('/aaa')
