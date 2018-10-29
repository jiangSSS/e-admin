import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: {
            username: "",
            idcardNumber: "",
            password: "",
            avatar: "",
            nickname: "",
            desc: "",
            job: "",
            phone: "",
            sex: "",
        },
        token: "",
        login: ""
    },
    mutations: {
        CHANGE_userInfo(state, payload) {
            state.userInfo = payload
        },
        // TOKEN (state,token){
        //     state.token = token
        // },
        // LOGIN (state,login){
        //     state.login = login
        // }
    },
    actions: {

    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => sessionStorage.getItem(key),
                setItem: (key, value) => sessionStorage.setItem(key, value),
                removeItem: key => sessionStorage.removeItem(key),
            }
        })
    ]
})
export default store