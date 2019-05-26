<template>
  <div>
    <div class="header-wrapper d-flex justify-content-between">
      <h1 class="text-left">
        <span class="text-uppercase">Today in trend</span>
      </h1>
      <span class='small'>Available spices - {{ spicesCount }}</span>
    </div>
    <b-row>
      <b-col sm="8">
        <template v-for="spice in spices">
          <SpiceItem :key="spice.id" />
          />
        </template>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SpiceItem from '@/components/SpiceItem'
export default {
  name: 'Spices',
  components: {
    SpiceItem
  },
  data () {
    return {
      spices: [{}, {}, {}, {}]
    }
  },
  computed: {
    spicesCount () {
      return this.spices.length
    }
  }
}
</script>
