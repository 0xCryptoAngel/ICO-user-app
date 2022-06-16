import { register, getUserInfo } from '@/api/customers.api'

export default {
  state: {
    userAddress: {},
    userInfo: {},
  },
  getters: {
    getUserAddress(state) {
      return state.userAddress
    },
    getUserInfo(state) {
      return state.userInfo
    },
  },
  
  mutations: {
    setAddress(state, payload) {
      state.userAddress = payload
    },
    setUserInfo(state, payload) {
      console.log("payload", payload)
      state.userInfo = payload
    }
  },

  actions: {
    async userRegister({ commit }, payload) {
      await register(payload)
    },
    async fetchUserInfo({ commit }, payload) {
      console.log("payload", payload)
      const response = await getUserInfo(payload)
      commit('setUserInfo', response.data)
    },
  },
}