<template>
  <div
    class="item mb-4 p-3"
    :class="{isEven: index % 2 === 0}"
  >
    <div class="d-flex align-items-center">
      <span class="font-weight-bold">{{ order }}</span>
      <div>
        <p class="ml-3 mr-5 mb-0"><b>{{spice.price}} &euro;</b></p>
        <p class="ml-3 mr-5 mb-0"><span class="text-uppercase">{{ spice.title }}</span> - {{spice.shortDescription}}</p>
      </div>

      <div class="d-flex ml-auto">
        <b-btn
          class="mr-3"
          variant="info"
          size="small"
          @click="$emit('show-full-info', spice)"
        >details
        </b-btn>
        <b-btn
          variant="success"
          size="small"
          @click="$emit('add-spice', spice)"
        >add
        </b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpiceItem',
  props: {
    spice: {
      type: Object,
      required: true
    },
    order: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>
