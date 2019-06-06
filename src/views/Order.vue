<template>
  <div>
    <div>
      <b-btn
        variant="danger"
        size="small"
        @click="clearOrder()"
      >
        clear
      </b-btn>
      Order
    </div>

    <div v-for="item in spices" :key="item.spiceId">
      <b-list-group class="mt-2">
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <div>
            <b-btn
              variant="warning"
              size="small"
              @click="updateQuantity({spiceId: item.spiceId, val: -1})"
            >
              -
            </b-btn>
            ({{ item.quantity }})
            <b-btn
              variant="success"
              size="small"
              @click="updateQuantity({spiceId: item.spiceId, val: 1})"
            >
              +
            </b-btn>
          </div>
          <div>
            {{ item.title }}
            <img :src="item.img" style="max-height: 40px" :alt="item.description" :title="item.shortDescription">
          </div>
          <div>
            <b>{{ item.price|currency }}</b>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>

    <span v-if="isOrderDiscount" class="text-danger">
      <b>DISCOUNT 20%</b>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Order',
  computed: {
    ...mapGetters([
      'getOrderSpices',
      'isOrderDiscount'
    ]),
    spices () {
      return this.getOrderSpices
    }
  },
  methods: {
    ...mapActions([
      'clearOrder',
      'updateQuantity'
    ])
  }
}
</script>

<style scoped>

</style>
