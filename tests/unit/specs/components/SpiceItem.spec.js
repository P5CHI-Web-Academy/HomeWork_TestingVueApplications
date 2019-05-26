import { shallowMount, mount } from '@vue/test-utils'
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

  test('emit on-add-item on clicking the add button', () => {
    const wrapper = mount(SpiceItem, {
      propsData: {
        spice: {
          title: 'some title'
        },
        order: 10,
        index: 2
      }
    })
    wrapper.find('button:last-of-type').trigger('click')

    expect(wrapper.emitted('add-spice')).toHaveLength(1)
  })

  test('emit on-show-full-info on clicking details button', () => {
    const wrapper = mount(SpiceItem, {
      propsData: {
        spice: {
          title: 'some title'
        }
      }
    })
    wrapper.find('button:first-of-type').trigger('click')

    expect(wrapper.emitted('show-full-info')).toHaveLength(1)
  })
})
