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
        <template v-for="(spice, index) in spices">
          <SpiceItem
            :key="spice.id"
            :index="index"
            :order="spice.orderId"
            :spice="spice"
            @add-spice="addSpice($event)"
          />
        </template>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SpiceItem from '@/components/SpiceItem'
import { mapGetters } from 'vuex'
export default {
  name: 'Spices',
  components: {
    SpiceItem
  },
  data () {
    return {
      spices: [],
      inPreOrder: []
    }
  },
  async created () {
    await this.$store.dispatch('fetchSpices')
    this.spices = this.getAvailableSpices
  },
  computed: {
    ...mapGetters([
      'getAvailableSpices'
    ]),
    spicesCount () {
      return this.getAvailableSpices.length
    }
  },
  methods: {
    addSpice ($event) {
      this.inPreOrder.push($event)
    }
  }
}
</script>
