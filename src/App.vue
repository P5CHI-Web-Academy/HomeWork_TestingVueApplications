<template>
  <div id="app">
    <b-container>
      <div id="nav" class="my-4">
        <router-link :to="{name: 'home'}">Home</router-link>
        <span class="mx-2">
          |
        </span>
        <router-link :to="{name: 'order'}">
          Order({{ orderAmount }} &euro;)
        </router-link>
        <span v-if="isOrderDiscount" class="text-danger small">
          <b>DISCOUNT</b>
        </span>
      </div>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'getOrderAmount',
      'isOrderDiscount'
    ]),
    orderAmount () {
      return Math.round(
        this.getOrderAmount * (this.isOrderDiscount ? 0.8 : 1) * 100
      ) / 100
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
