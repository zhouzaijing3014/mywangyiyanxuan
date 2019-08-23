/**
 * 封装用于发送ajax请求的函数模块
 * 返回值为一promise对象
 * 包装axios
 * 自己封装ajax的目的：
 *    1.能够得到异步执行的response的data
 *    2.统一管理请求失败的状态
 */
import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use((config) => {
  const {method, data} = config  
  // 如果是携带数据的post请求, 进行处理
  if (method.toLowerCase()==='post' && data && typeof data==='object') {
    config.data = qs.stringify(data) // {name: 'tom', pwd: '123'} ==> name=tom&pwd=123
  }
  return config;
});


// export default axios

export default function ajax (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;
    if (method === 'GET') {
     promise = axios.get(url, {
        params: data
      })
    } else {
     promise = axios.post(url, data);
    }
    promise
      .then(response => {
        console.log('请求成功');
        resolve(response.data);
      })
      .catch(error => {
        alert('请求失败' + error.msg);
      })
  });
}
  