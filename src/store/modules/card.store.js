import { getStake, postStake } from '@/api/applications.api'

export default {
  state: {
    slides: {},
  },
  getters: {
    // getWareHousesList(state) {
    //   return state.wareList
    // },
    getSlideById: (state) => (id) => {
      return state.slides[id]
    },
  },
  
  mutations: {
    setSlides(state, payload) {
      console.log("payload", payload)
      state.slides = payload
    },
  },

  actions: {
    async fetchCard({ commit }) {
      const response = await getStake()
      console.log("response", response)
      commit("setSlides", response.data);
    },
    async createStake({ commit }, payload) {
      try {
        let response = await postStake(payload)
        console.log("response", response.status)
      } catch (error) {
        console.log(error)
      }
    },
    
  },
}