import Vue from 'vue'
import App from './App.vue'
import purecss from '../node_modules/purecss/build/pure.css'

Vue.use(purecss)

new Vue({
  el: '#app',
  render: h => h(App)
})
