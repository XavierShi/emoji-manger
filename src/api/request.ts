import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 30000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
