import { shallowMount } from '@vue/test-utils'
import Spices from '@/views/Spices'
import SpiceItem from '@/components/SpiceItem'

describe('Spices.vue', () => {
  test('render the header of the app', () => {
    const wrapper = shallowMount(Spices)

    expect(wrapper.text()).toContain('Today in trend')
  })

  test('render the number of available spices', () => {
    const spices = [{}, {}, {}]
    const wrapper = shallowMount(Spices)
    wrapper.setData({
      spices
    })

    expect(wrapper.text()).toContain(spices.length)
  })

  test('render the list of items', () => {
    const spices = [{}, {}, {}, {}]
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
    const spices = [{}, {}, {}, {}]
    expect.assertions(spices.length)

    const wrapper = shallowMount(Spices)

    const spiceItems = wrapper.findAll(SpiceItem)
    spiceItems.wrappers.forEach((wrapper, index) => {
      expect(wrapper.props().spice).toEqual(spices[index])
    })
  })
})
