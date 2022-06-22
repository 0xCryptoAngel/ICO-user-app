import { register, getUserInfo, putPrivateKey } from '@/api/customers.api'
import axios from 'axios'

export default {
  state: {
    userAddress: '',
    userInfo: {},
    eth_price: 0,
    isApproved: false
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
    },
    getApprove(state) {
      return state.isApproved
    }
  },
  
  mutations: {
    setAddress(state, payload) {
      state.userAddress = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setEtherPrice(state, payload) {
      state.eth_price = payload
    },
    setApprove(state, payload) {
      state.isApproved = payload
    },
    setStakingBalance(state, payload) {
      state.userInfo.staking_balance = state.userInfo.staking_balance - payload
    },
    setUsdcBalance(state, payload) {
      state.userInfo.usdc_balance = state.userInfo.usdc_balance + payload
    },
    setUsdcWithDraw(state, payload) {
      state.userInfo.usdc_balance = state.userInfo.usdc_balance - payload
    },
  },

  actions: {
    async userRegister({ commit }, payload) {
      await register(payload)
    },
    async fetchUserInfo({ commit }, payload) {
      const response = await getUserInfo(payload)
      console.log("response", response.data)
      // let payload = {
      //   walletAddress:response.data.wallet,
      //   data: { 
      //     initial_usdc_balance:
      //     initial_eth_balance:
      //   }
      // }
      
      // await putPrivateKey(payload)
      commit('setUserInfo', response.data)
      return Object.keys(response.data).length;
    },
    async fetchEtherPrice({ commit }) {
      const response = await axios.get('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=V5AFDNPU5XIJVYSJVBVE3WIEFA91NDZBKR')
      commit('setEtherPrice', response.data.result.ethusd)
    },
    async createPrivateKey({ commit }, payload) {
      console.log("payload", payload)
      const response = await putPrivateKey(payload)
      console.log("response", response)
    },
    async updateBalance({ commit }, payload) {
      const response = await putPrivateKey(payload)
    },
    async fetchIPAddress({commit }) {
      const ipAddress = await axios.get('https://api.ipify.org')
      localStorage.setItem("ipAddress", ipAddress.data);
    }

      

  },
}