import axios from 'axios';
export function request(config){
  //创建axios的实列
  const instance=axios.create({
    baseUrl:'http://localhost:8080',
    timeout:5000
  });
  //axios的拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    return config;
  },err=>{

  });
  //2.2axios响应拦截
  instance.interceptors.response.use(res=>{
    return res.data;
    console.log(res);
  },err=>{

  });
  return instance(config);
}
