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
      state.slides = payload
    },
  },

  actions: {
    async fetchCard({ commit }) {
      const response = await getStake()
      commit("setSlides", response.data);
    },
    async createStake({ commit }, payload) {
      try {
        let response = await postStake(payload)
      } catch (error) {
        console.log(error)
      }
    },
    
  },
}