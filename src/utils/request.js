import axios from 'axios'
const request = axios.create({
  baseURL: 'http://106.52.253.249:8080/'
})
export const news = () => {
  return request({
    method: 'GET',
    url: ''
  })
}
export const content = id => {
  return request({
    method: 'GET',
    url: '/' + id
  })
}
