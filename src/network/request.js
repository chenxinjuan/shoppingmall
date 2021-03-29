import axios from 'axios';
// export default function request(config){
//   console.log(config)
//   let apiBaseUrl = 'http://111.231.134.126:8083/bjJK'
//   //创建axios的实列
//   const instance=axios.create({
//     baseUrl: apiBaseUrl,
//     timeout:5000
//   });
//   //axios的拦截器
//   //2.1请求拦截的作用
//   instance.interceptors.request.use(config=>{
//     console.log(config)
//     const requestHeader = {
//       'X-Requested-With': 'XMLHttpRequest',
//       'Content-Type': 'application/json; charset=UTF-8',
//       'Access-Control-Allow-Origin': '*'
//     }
//     config.headers = Object.assign(config.headers, requestHeader)
//     return config;
//   },err=>{
//     return Promise.reject(err)
//   });
//   //2.2axios响应拦截
//   instance.interceptors.response.use(res=>{
//     return res.data;
//     console.log(res);
//   },err=>{
//     return Promise.reject(err)
//   });
//   return instance(config);
// }
  //测试地址
  // let apiBaseUrl = 'http://81.68.102.112:8088/jdlJK-1.0.0/'
  //创建axios的实列
  const instance=axios.create({
    baseURL: 'http://111.231.134.126:8083/bjJK',
    timeout:5000
  });
  //axios的拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    console.log(config)
    return config;
  },err=>{
    return Promise.reject(err)
  });
  //2.2axios响应拦截
  instance.interceptors.response.use(res=>{
    return res.data;
    console.log(res);
  },err=>{
    return Promise.reject(err)
  });
  export default instance