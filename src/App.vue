<template>
  <div id="app">
    <b-container>
      <div id="nav" class="my-4">
        <router-link :to="{name: 'home'}">Home</router-link>
        <span class="mx-2">|</span>
        <router-link :to="{name: 'order'}">Order</router-link>
      </div>
      <router-view/>
    </b-container>
  </div>
</template>

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
