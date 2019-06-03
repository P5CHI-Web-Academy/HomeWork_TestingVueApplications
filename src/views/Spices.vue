<template>
  <div>
    <div class="header-wrapper d-flex justify-content-between">
      <h1 class="text-left">
        <span class="text-uppercase">
          Today in trend
        </span>
      </h1>

      <div>
        <p>
          <span class="small">
            Available spices - {{ spicesCount }}
          </span>
        </p>

        <p>
          <span class="small text-warning">
            A discount is applied if at least one condition satisfied
            <ul>
              <li>more than 3 types of items are in order</li>
              <li>at least one item has quantity more than 3 in order</li>
            </ul>
          </span>
        </p>
      </div>
    </div>

    <b-row>
      <b-col sm="8">
        <template v-for="(spice, index) in spices">
          <SpiceItem
            :key="spice.id"
            :index="index"
            :order="spice.spiceId"
            :spice="spice"
            @add-spice="addSpice($event)"
            @show-full-info="showDetails($event)"
          />
        </template>
      </b-col>
      <b-col sm="4">
        <SpicesOrderPreviewList
          v-show="inPreOrder.length > 0"
          :in-pre-order="inPreOrder"
          @remove-spice="removeSpice($event)"
          @add-to-order="addToOrder()"
        />
      </b-col>
    </b-row>
    <spice-detail-modal :spice="spiceDetails" @add-spice="addSpice($event)" />
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
  computed: {
    ...mapGetters([
      'getAvailableSpices'
    ]),
    spicesCount () {
      return this.getAvailableSpices.length
    }
  },
  async created () {
    await this.$store.dispatch('fetchSpices')
    this.spices = this.getAvailableSpices
  },
  methods: {
    addSpice ($event) {
      this.inPreOrder.push($event)
    },
    async addToOrder () {
      await this.$store.dispatch('addSpicesToOrder', this.inPreOrder)
      this.inPreOrder = []
    },
    removeSpice ($event) {
      this.inPreOrder.splice(
        this.inPreOrder.findIndex(spice => $event.spiceId === spice.spiceId),
        1
      )
    },
    showDetails ($event) {
      this.spiceDetails = $event
      this.$root.$emit('bv::show::modal', 'spices_details_modal')
    }
  }
}
</script>
