import { shallowMount } from '@vue/test-utils'
import Spices from '@/views/Spices'

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
})
