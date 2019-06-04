<template>
  <div>
    <b-row>
      <b-col>
        <b-btn
          block
          variant="primary"
          @click="$emit('add-to-order')"
        >
          Add to order ({{ total|currency }})
        </b-btn>
      </b-col>
    </b-row>
    <b-row>
      <template v-for="item in inPreOrder">
        <b-col :key="item.id" sm="12">
          <b-list-group class="mt-2">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <b>{{ item.price|currency }}</b> {{ item.title }} <img :src="item.img" style="max-height: 40px" :alt="item.description" :title="item.shortDescription">

              <b-btn
                variant="danger"
                size="small"
                @click="$emit('remove-spice', item)"
              >
                remove
              </b-btn>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'SpicesOrderPreviewList',
  props: {
    inPreOrder: {
      required: true,
      type: Array
    }
  },
  computed: {
    total () {
      return Math.round(
        this.inPreOrder.reduce((a, b) => {
          return a + b.price
        }, 0) * 100
      ) / 100
    }
  }
}
</script>
