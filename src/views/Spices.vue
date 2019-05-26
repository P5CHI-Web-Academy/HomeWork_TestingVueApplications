<template>
  <div>
    <div class="header-wrapper d-flex justify-content-between">
      <h1 class="text-left">
        <span class="text-uppercase">Today in trend</span>
      </h1>
      <span class='small'>Available spices - {{ spicesCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spices',
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
