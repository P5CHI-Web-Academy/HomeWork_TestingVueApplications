<template>
  <div>
    <b-row>
      <b-col>
        <b-btn block variant="primary">Add to order</b-btn>
      </b-col>
    </b-row>
    <b-row>
      <div>
        <OrderItem v-for="item in inPreOrder" :key="item.id" />
        <!-- <b-col sm="12" :key="item.id">
          <b-list-group class="mt-2">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ item.title }} <img :src="item.img" style="max-height: 40px" :alt="item.description" :title="item.shortDescription"/>
            </b-list-group-item>
          </b-list-group>
        </b-col> -->
      </div>
    </b-row>
  </div>

</template>

<script>
import OrderItem from '@/components/OrderItem'

export default {
  name: 'SpicesOrderPreviewList',
  data () {
    return {
      items: null
    }
  },
  props: {
    inPreOrder: {
      type: Array
    }
  },
  components: {
    OrderItem
  }
}
</script>
