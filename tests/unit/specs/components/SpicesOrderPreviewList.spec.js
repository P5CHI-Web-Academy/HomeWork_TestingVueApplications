import { shallowMount, createLocalVue } from '@vue/test-utils'
import SpicesOrderPreviewList from '@/components/SpicesOrderPreviewList'
import OrderItem from '@/components/OrderItem'
import Vuex from 'vuex'

// TODO homework
describe('SpicesOrderPreviewList', () => {
  let localVue = createLocalVue()
  localVue.use(Vuex)

  let store
  let getters

  beforeEach(() => {
    getters = {
      getPreOrderList: () => []
    }

    store = new Vuex.Store({
      getters
    })
  })

  test('check if it renders correct amount of list items', () => {
    const inPreOrder = [{}, {}, {}]
    const wrapper = shallowMount(SpicesOrderPreviewList, {
      propsData: {
        inPreOrder
      }
    })
    expect(wrapper.findAll(OrderItem)).toHaveLength(inPreOrder.length)
  })

  // test.todo('move data fetching from store, using getters')

  test('getter getPreOrderList returns corrct number of items from PreOrder', () => {
    const state = {
      inPreOrder: [
        {
          title: 'Garlic Powder',
          shortDescription: 'Garlic powder is made from dehydrated garlic cloves and can be used to give dishes a sweeter, softer garlic flavor.',
          isAvailable: true,
          orderId: 5,
          img: 'https://radiancewholefoods.com/image/cache/catalog/Garlic%20powder-500x500.png'
        },
        {
          title: 'Mahlab',
          shortDescription: 'Ground from sour cherry pits, this spice has a nutty and somewhat sour flavor. It’s used in a lot of sweet breads throughout the Middle East.',
          isAvailable: true,
          orderId: 7,
          img: 'https://cdn.shopify.com/s/files/1/0522/6301/products/9KJToHOOjQ7fEpmQgmJUjYj9ZGsjFrA7POH6NcrYjcw_w518-h392-p-no_large.png?v=1438667921'
        }
      ]
    }
    expect(getPreOrderList()).toHaveLength(2)
  })
  // test.todo('create test and functionality for remove spice from list of preordered spices')

  // test.todo('check click `Add to Order` is triggered')
  // test.todo('check store for items in order')
})
