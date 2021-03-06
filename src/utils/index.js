import axios from "axios"

const env = process.env.NODE_ENV    //生产环境下  被设置为production
                                    //开发环境下  被设置为development
let baseURL = env == "development" ? "/api" : "/"
const instance = axios.create({
    baseURL,
    timeout: 15000
})
const xhr = {
    fetch(url, data, config, methods) {
        return new Promise((resolve, reject) => {
            instance[methods](url, data, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    get(url, data, config) {
        return this.fetch(url, { params: data }, config, "get")
    },
    put(url, data, config) {
        return this.fetch(url, data, config, "put")
    },
    post(url, data, config) {
        return this.fetch(url, data, config, "post")
    },
    patch(url, data, config) {
        return this.fetch(url, data, config, "patch")
    },
   
}
export const $axios = xhr