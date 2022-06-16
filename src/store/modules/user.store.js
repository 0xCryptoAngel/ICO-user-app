// import { getStake } from '@/api/applications.api'

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
   
  },
}