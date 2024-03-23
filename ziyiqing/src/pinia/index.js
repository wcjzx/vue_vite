import { defineStore } from 'pinia'
import { getUserInfo } from '../utils/request'

export const useStore = defineStore('main', {
    state: () => {
        return {
            userInfo: {
                name: '',
                School:'',
                Professions:'',
                GraduateCity:''
            },
        }
    },
    actions: {
        // 异步 action，一般用来处理异步逻
        async getUserInfo() {
            const result = await getUserInfo()
            console.log(result)
            const data = result.data
            this.userInfo.name = data.username
            this.userInfo.School = data.school
            this.userInfo.Professions= data.professions
            this.userInfo.GraduateCity = data.graduatecity
        }
    }
})