import { shallowMount } from '@vue/test-utils'
import Spices from '@/views/Spices'

describe('Spices.vue', () => {
  test('render the header of the app', () => {
    const wrapper = shallowMount(Spices)

    expect(wrapper.text()).toContain('Today in trend')
  })
})
