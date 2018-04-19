import Vue from 'vue'
import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost:9000'
})

// 请求拦截
instance.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use((response) => {
  let status = response.status
  if (status === 200) {
    return response.data
  } else {
    return Promise.reject(response.status)
  }
}, (err) => {
  return Promise.reject(err)
})

Object.defineProperty(Vue.prototype, '$http', {
  value: instance
})

export default instance

export function login (loginInfo) {
  return new Promise((resolve, reject) => {
    instance.post('/user/login', loginInfo).then(res => {
      resolve(res)
    })
  })
}
