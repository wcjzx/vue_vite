import {service,Article} from './api'
// 向后端发送请求
/**
 * 获取用户信息
 * 无参数
 * @returns {Promise} 返回一个Promise对象，成功时携带用户信息
 */
export function getUserInfo () {
    // 从服务端获取用户信息
    return service.get('/user/userinfo')
}
export function getArticleCategoryInfo(){
    return Article.get('/category')
}
export function getArticleNotice(){
    return Article.get('/notice')
}

