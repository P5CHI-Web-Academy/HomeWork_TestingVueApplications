import Vue from 'vue'

Vue.filter('currency', function (value) {
  if (isNaN(value) || value.toString().trim() === '') {
    value = 0
  }

  return `${value} \u20AC` // euro sign
})
