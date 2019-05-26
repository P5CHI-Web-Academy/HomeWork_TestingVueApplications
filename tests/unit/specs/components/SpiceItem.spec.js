import { shallowMount } from '@vue/test-utils'
import SpiceItem from '@/components/SpiceItem'

describe('SpiceItem.vue', () => {
  test('contain correct props object', () => {
    const spice = {}
    const order = 2
    const index = 1

    const wrapper = shallowMount(SpiceItem, {
      propsData: {
        spice,
        order,
        index
      }
    })

    expect(wrapper.props()).toEqual({spice, order, index})
  })
})
