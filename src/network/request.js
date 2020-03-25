import axios from 'axios'

export function request (config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  axios.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err =>{
    console.log(err)
  })

  axios.interceptors.response.use(config => {

  })

  // 2.发送真正的网络请求
  return instance(config)
}

a
