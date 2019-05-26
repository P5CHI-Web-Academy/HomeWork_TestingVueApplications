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

    expect(wrapper.props()).toEqual({ spice, order, index })
  })

  test('render content from props', () => {
    const spice = {
      title: 'some title'
    }
    const order = 10
    const index = 5

    const wrapper = shallowMount(SpiceItem, {
      propsData: {
        spice,
        order,
        index
      }
    })

    expect(wrapper.text()).toContain(spice.title)
    expect(wrapper.text()).toContain(order)
  })
})
