import { withdraw, getWithDraw } from '@/api/withdraw.api'
import { getEarning } from '@/api/applications.api'

export default {
  state: {
    withDrawRecords: {},
    earningRecords: [],
    confirmedStaking: [],
  },
  getters: {
    getWithDrawRecords(state) {
      return state.withDrawRecords
    },
    getEarningRecords(state) {
      return state.earningRecords
    },
    getEarningAmount(state) {
      let sum = 0;
      state.earningRecords?.map((item)=>{
        item.earning_list?.map((amount)=>{
          sum = sum + amount?.earning
        })
      })
      return sum
    },
    getStakingAmount(state) {
      let sum = 0;
      state.confirmedStaking?.map((item)=>{
          sum = sum + item?.amount
      })
      return sum
    },
    getConfirmedRecords(state) {
      return state.confirmedStaking;
    },
    getEthBalance(state) {
      return state.ethBalance
    }
  },
  
  mutations: {
    setWithDrawRecords(state, payload) {
      state.withDrawRecords = payload
    },
    setEarningRecords(state, payload) {
      state.earningRecords = payload
    },
    setEthBalance(state, payload) {
      state.ethBalance = payload
    },
    setConfirmedRecords(state, payload) {
      let sortedData = payload?.sort(function(a,b){
        return new Date(b.reward_rate) - new Date(a.reward_rate);
      });
      let result = sortedData?.filter(item => item.is_confirmed && !item.is_canceled && item.ending_at > new Date());
      
      state.confirmedStaking = result;
    }
  },

  actions: {
    // async fetchCard({ commit }) {
    //   const response = await getStake()
    //   commit("setSlides", response.data);
    // },
    async withdraw({ commit }, payload) {
      try {
        await withdraw(payload)
      } catch (error) {
        console.log(error)
      }
    },
    async getWithDraw({commit}, payload) {
      let response = await getWithDraw(payload)
      commit('setWithDrawRecords', response.data)
    },
    async getEarning({commit}, payload) {
      let response = await getEarning(payload)
      commit('setEarningRecords', response.data)
      commit('setConfirmedRecords', response.data)
    }
    
    
  },
}