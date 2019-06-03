import { mount, shallowMount } from '@vue/test-utils'
import SpicesOrderPreviewList from '@/components/SpicesOrderPreviewList'
import SpiceItem from '@/components/SpiceItem'

// TODO homework
describe('SpicesOrderPreviewList', () => {
  test('check if it renders correct amount of list items', () => {
    const inPreOrder = [{}, {}, {}]
    const wrapper = shallowMount(SpicesOrderPreviewList, {
      propsData: {
        inPreOrder
      }
    })
    expect(wrapper.findAll('div.b-list-group-item')).toHaveLength(inPreOrder.length)
  })

  // test.todo('move data fetching from store, using getters')
  // test.todo('create test and functionality for remove spice from list of preordered spices')

  // test.todo('check click `Add to Order` is triggered')
  // test.todo('check store for items in order')
})
