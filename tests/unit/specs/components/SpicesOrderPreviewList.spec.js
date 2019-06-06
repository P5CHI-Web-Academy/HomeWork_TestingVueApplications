import { mount } from '@vue/test-utils'
import SpicesOrderPreviewList from '@/components/SpicesOrderPreviewList'

describe('SpicesOrderPreviewList', () => {
  const inPreOrder = [
    {
      title: 'title1',
      img: 'img1',
      description: 'description1',
      shortDescription: 'shortDescription1'
    },
    {
      title: 'title2',
      img: 'img2',
      description: 'description2',
      shortDescription: 'shortDescription2'
    }
  ]

  test('correct amount of list items rendered', () => {
    const wrapper = mount(SpicesOrderPreviewList, {
      propsData: {
        inPreOrder: inPreOrder
      }
    })

    expect(wrapper.findAll('.list-group-item')).toHaveLength(inPreOrder.length)
  })

  test('spice can be removed from list of preordered spices', () => {
    const wrapper = mount(SpicesOrderPreviewList, {
      propsData: {
        inPreOrder: inPreOrder
      }
    })

    wrapper.find('.btn-danger').trigger('click')
    expect(wrapper.emitted('remove-spice')).toHaveLength(1)
  })

  test('click `Add to Order` triggers corresponding event', () => {
    const wrapper = mount(SpicesOrderPreviewList, {
      propsData: {
        inPreOrder: inPreOrder
      }
    })

    wrapper.find('.btn-primary').trigger('click')
    expect(wrapper.emitted('add-to-order')).toHaveLength(1)
  })
})
