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
            @show-full-info="showDetails($event)"
          />
        </template>
      </b-col>
      <b-col sm="4">
        <spices-order-preview-list
          :inPreOrder="inPreOrder"
          v-show="inPreOrder.length > 0"/>
      </b-col>
    </b-row>
    <spice-detail-modal :spice="spiceDetails" @add-spice="addSpice($event)"/>
  </div>
</template>

<script>
import SpiceItem from '@/components/SpiceItem'
import SpiceDetailModal from '@/components/modals/SpiceDetailModal'
import SpicesOrderPreviewList from '@/components/SpicesOrderPreviewList'
import { mapGetters } from 'vuex'
export default {
  name: 'Spices',
  components: {
    SpiceItem,
    SpiceDetailModal,
    SpicesOrderPreviewList
  },
  data () {
    return {
      spices: [],
      inPreOrder: [],
      spiceDetails: null
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
    },
    showDetails ($event) {
      this.spiceDetails = $event
      this.$root.$emit('bv::show::modal', 'spices_details_modal')
    }
  }
}
</script>
