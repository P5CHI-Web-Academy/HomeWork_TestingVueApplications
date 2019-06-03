import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // INFO should be disabled in production
  state: {
    spices: [],
    spice: '',
    orderSpices: {}
  },
  getters: {
    getAvailableSpices: state => state.spices.filter(spice => spice.isAvailable === true),
    getOrderSpices: state => state.orderSpices,
    getOrderAmount: state => {
      return Object.values(state.orderSpices).reduce(function (a, b) {
        return a + (b.price * b.quantity)
      }, 0)
    },
    isOrderDiscount: state =>
      Object.values(state.orderSpices).filter(position => position.quantity > 3).length > 0 ||
      Object.keys(state.orderSpices).length > 3
  },
  actions: {
    async fetchSpices ({ state, commit }) {
      const spices = await fetchItems()
      commit('ADD_SPICES', spices)

      return spices
    },
    async addSpicesToOrder ({ state, commit }, spices) {
      commit('ADD_TO_ORDER', spices)
    },
    async clearOrder ({ state, commit }) {
      commit('CLEAR_ORDER')
    },
    async updateQuantity ({ state, commit }, data) {
      commit('UPDATE_QUANTITY', data)
    }
  },
  mutations: {
    ADD_SPICES (state, spices) {
      state.spices = spices
    },
    ADD_TO_ORDER (state, spices) {
      let OrderSpices = spices.reduce((a, b) => {
        if (b.spiceId in a) {
          a[b.spiceId].quantity++
        } else {
          b.quantity = 1
          a[b.spiceId] = b
        }

        return a
      }, state.orderSpices)
      Vue.set(state, 'orderSpices', { ...OrderSpices })
    },
    CLEAR_ORDER (state) {
      state.orderSpices = {}
    },
    UPDATE_QUANTITY (state, data) {
      let orderPosition = state.orderSpices[data.spiceId]
      orderPosition.quantity += data.val

      if (orderPosition.quantity > 0) {
        Vue.set(state.orderSpices, data.spiceId, { ...orderPosition })
      } else {
        Vue.delete(state.orderSpices, data.spiceId)
      }
    }
  }
})
