import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Order from '@/views/Order'
import flushPromises from 'flush-promises'

describe('Order', () => {
  const inOrder = {
    1: {
      title: 'title1',
      img: 'img1',
      description: 'description1',
      shortDescription: 'shortDescription1',
      price: 1.11,
      quantity: 1
    },
    2: {
      title: 'title2',
      img: 'img2',
      description: 'description2',
      shortDescription: 'shortDescription2',
      price: 2.22,
      quantity: 1
    }
  }

  let localVue = createLocalVue()
  localVue.use(Vuex)

  let store
  let getters
  let actions
  beforeEach(() => {
    getters = {
      getOrderSpices: () => inOrder,
      isOrderDiscount: () => true
    }

    actions = {
      clearOrder: jest.fn(() => Promise.resolve([])),
      updateQuantity: jest.fn(() => Promise.resolve([]))
    }

    store = new Vuex.Store({
      getters,
      actions
    })
  })

  test('check store for items in order', () => {
    const wrapper = mount(Order, { store, localVue })

    expect(wrapper.findAll('.list-group-item')).toHaveLength(Object.keys(inOrder).length)
  })

  test('action `updateQuantity` is triggered when clicking corresponding buttons', async () => {
    const wrapper = mount(Order, { store, localVue })

    wrapper.find('.btn-warning').trigger('click')
    await flushPromises()
    expect(actions.updateQuantity).toHaveBeenCalled()

    wrapper.find('.btn-success').trigger('click')
    await flushPromises()
    expect(actions.updateQuantity).toHaveBeenCalled()
  })

  test('`clearOrder` is called when [clear] button is clicked', async () => {
    const wrapper = mount(Order, { store, localVue })

    wrapper.find('.btn-danger').trigger('click')
    await flushPromises()
    expect(actions.clearOrder).toHaveBeenCalled()
  })

  test('`discount` message is rendered, when there is discount', async () => {
    const wrapper = mount(Order, { store, localVue })
    await flushPromises()
    expect(wrapper.text()).toContain('DISCOUNT')
  })

  test('`discount` message is NOT rendered, when there is no discount', async () => {
    let getters = {
      getOrderSpices: () => {},
      isOrderDiscount: () => false
    }
    let store = new Vuex.Store({
      getters: getters
    })
    const wrapper = mount(Order, { store, localVue })
    await flushPromises()
    expect(wrapper.text()).not.toContain('DISCOUNT')
  })
})
