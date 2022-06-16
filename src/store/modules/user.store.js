import { register } from '@/api/customers.api'

export default {
  state: {
    userAddress: {},
  },
  getters: {
    getUserAddress(state) {
      return state.userAddress
    },
  },
  
  mutations: {
    setAddress(state, payload) {
      console.log("payload", payload)
      state.userAddress = payload
    },
  },

  actions: {
    async userRegister({ commit }, payload) {
      console.log("payload", payload)
      const response = await register(payload)
      console.log("response", response)
    },
  },
}