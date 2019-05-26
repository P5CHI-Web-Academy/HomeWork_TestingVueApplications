import { shallowMount, createLocalVue } from '@vue/test-utils'
import Spices from '@/views/Spices'
import SpiceItem from '@/components/SpiceItem'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'

describe('Spices.vue', () => {
  let localVue = createLocalVue()
  localVue.use(Vuex)

  let store
  let getters
  let actions
  beforeEach(() => {
    getters = {
      getAvailableSpices: () => [
        {
          title: 'some test title',
          orderId: 1
        }, {
          title: 'some test title',
          orderId: 2
        }, {
          title: 'some test title',
          orderId: 3
        }
      ]
    }

    actions = {
      fetchSpices: jest.fn(() => Promise.resolve([]))
    }

    store = new Vuex.Store({
      getters,
      actions
    })
  })
  test('render the header of the app', () => {
    const wrapper = shallowMount(Spices)

    expect(wrapper.text()).toContain('Today in trend')
  })

  test('render the number of available spices', async () => {
    const spices = [{}, {}, {}]
    const wrapper = shallowMount(Spices, { store, localVue })

    await flushPromises()
    expect(wrapper.text()).toContain(spices.length)
  })

  test('render the list of items', () => {
    const amount = spices.length

    const wrapper = shallowMount(Spices)
    wrapper.setData({
      spices
    })

    const spiceItems = wrapper.findAll(SpiceItem)

    expect(wrapper.vm.spicesCount).toBe(amount)
    expect(spiceItems).toHaveLength(amount)
  })

  test('send a valid props for each of rendered items', () => {
    expect.assertions(spices.length)

    const wrapper = shallowMount(Spices)
    wrapper.setData({
      spices
    })

    const spiceItems = wrapper.findAll(SpiceItem)
    spiceItems.wrappers.forEach((wrapper, index) => {
      expect(wrapper.props().spice).toEqual(spices[index])
    })
  })

  test('receive event from child component on change of the available spices', () => {
    const wrapper = shallowMount(Spices)
    const title = 'some spice title'

    wrapper.find(SpiceItem).vm.$emit('add-spice', title)
    expect(wrapper.vm.$data.inPreOrder).toContain(title)
  })
})
