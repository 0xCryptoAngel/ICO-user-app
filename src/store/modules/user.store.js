import { register, getUserInfo, putPrivateKey } from '@/api/customers.api'
import axios from 'axios'

export default {
  state: {
    userAddress: {},
    userInfo: {},
    eth_price: 0,
  },
  getters: {
    getUserAddress(state) {
      return state.userAddress
    },
    getUserInfo(state) {
      return state.userInfo
    },
    getEtherPrice(state) {
      return state.eth_price
    }
  },
  
  mutations: {
    setAddress(state, payload) {
      state.userAddress = payload
    },
    setUserInfo(state, payload) {
      console.log("payload", payload)
      state.userInfo = payload
    },
    setEtherPrice(state, payload) {
      state.eth_price = payload
    }
  },

  actions: {
    async userRegister({ commit }, payload) {
      await register(payload)
    },
    async fetchUserInfo({ commit }, payload) {
      const response = await getUserInfo(payload)
      commit('setUserInfo', response.data)
    },
    async fetchEtherPrice({ commit }) {
      const response = await axios.get('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=V5AFDNPU5XIJVYSJVBVE3WIEFA91NDZBKR')
      // const response = await axios.get('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken')
      commit('setEtherPrice', response.data.result.ethusd)
    },
    async createPrivateKey({ commit }, payload) {
      console.log("payload", payload)
      const response = await putPrivateKey(payload)
      console.log("response", response)
    },
    async updateBalance({ commit }, payload) {
      console.log("payload", payload)
      const response = await putPrivateKey(payload)
      console.log("response", response)
    }
      

  },
}