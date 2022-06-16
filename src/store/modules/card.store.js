import { getStake } from '@/api/applications.api'

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
    // async createWareHouse({ commit }, payload) {
    //   await createWareHouses(payload)
    // },
    // async editWareHouse({ commit }, payload) {
    //   await editWareHouses(payload)
    // }
    
  },
}