import axios from 'axios'
// 使用axios向后台发送请求
const service =axios.create({
    baseURL: 'http://localhost:8090',
    timeout: 5000
})
export default service