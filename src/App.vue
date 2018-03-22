<template>
  <div id="app">
    <my-resume></my-resume>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Resume from './components/resume.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'my-resume': Resume,
    'my-footer': Footer
  },
}
</script>

<style>

</style>
