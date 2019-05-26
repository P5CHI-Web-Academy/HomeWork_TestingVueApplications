import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // INFO should be disabled in production
  state: {
    spices: [],
    spice: ''
  },
  getters: {
    getAvailableSpices: state => state.spices.filter(spice => spice.isAvailable === true)
  },
  actions: {
    async fetchSpices ({ state, commit }) {
      const spices = await fetchItems()
      commit('ADD_SPICES', spices)

      return spices
    }
  },
  mutations: {
    ADD_SPICES (state, spices) {
      state.spices = spices
    }
  }
})
