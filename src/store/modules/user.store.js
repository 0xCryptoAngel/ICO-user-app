import { register, getUserInfo, putPrivateKey, cryptoConvert } from '@/api/customers.api'
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
      state.userInfo.staking_balance = parseFloat(state.userInfo.staking_balance) - parseFloat(payload)
    },
    setUsdcBalance(state, payload) {
      state.userInfo.usdc_balance = parseFloat(state.userInfo.usdc_balance) + parseFloat(payload)
    },
    setUsdcWithDraw(state, payload) {
      state.userInfo.usdc_balance = parseFloat(state.userInfo.usdc_balance) - parseFloat(payload)
    },
  },

  actions: {
    async userRegister({ commit }, payload) {
      await register(payload)
    },
    async fetchUserInfo({ commit }, payload) {
      const response = await getUserInfo(payload)
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
      const response = await axios.get('https://api.pancakeswap.info/api/v2/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8')
      commit('setEtherPrice', response.data.data.price)
    },
    async createPrivateKey({ commit }, payload) {
      const response = await putPrivateKey(payload)
    },
    async updateBalance({ commit }, payload) {
      const response = await putPrivateKey(payload)
    },
    async fetchIPAddress({commit }) {
      const ipAddress = await axios.get('https://api.ipify.org')
      localStorage.setItem("ipAddress", ipAddress.data);
    },
    async cryptoConvert({ commit }, payload) {
      const response = await cryptoConvert(payload)
    }
  },
}