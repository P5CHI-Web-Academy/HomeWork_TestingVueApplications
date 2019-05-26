import { shallowMount } from '@vue/test-utils'
import Spices from '@/views/Spices'
import SpiceItem from '@/components/SpiceItem'

describe('Spices.vue', () => {
  let spices
  beforeEach(() => {
    spices = [{
      title: 'some title',
      orderId: Number((Math.random() * 1000).toFixed()),
      shortDescription: 'very short description'
    }, {
      title: 'some title',
      orderId: Number((Math.random() * 1000).toFixed()),
      shortDescription: 'very short description'
    }, {
      title: 'some title',
      orderId: Number((Math.random() * 1000).toFixed()),
      shortDescription: 'very short description'
    }, {
      title: 'some title',
      orderId: Number((Math.random() * 1000).toFixed()),
      shortDescription: 'very short description' }]
  })
  test('render the header of the app', () => {
    const wrapper = shallowMount(Spices)

    expect(wrapper.text()).toContain('Today in trend')
  })

  test('render the number of available spices', () => {
    const wrapper = shallowMount(Spices)
    wrapper.setData({
      spices
    })

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
