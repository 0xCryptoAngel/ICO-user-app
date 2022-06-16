import { withdraw } from '@/api/withdraw.api'

export default {
  state: {
    // slides: {},
  },
  getters: {
    // getWareHousesList(state) {
    //   return state.wareList
    // },
    // getSlideById: (state) => (id) => {
    //   return state.slides[id]
    // },
  },
  
  mutations: {
    // setSlides(state, payload) {
    //   state.slides = payload
    // },
  },

  actions: {
    // async fetchCard({ commit }) {
    //   const response = await getStake()
    //   commit("setSlides", response.data);
    // },
    async withdraw({ commit }, payload) {
      try {
        console.log("payload", payload)
        let response = await withdraw(payload)
        console.log("response", response)
      } catch (error) {
        console.log(error)
      }
    },
    
  },
}