<template>
  <div id="app">
    <layout></layout>
  </div>
</template>
<script>
import Layout from '@/views/layout'
export default {
  components: {Layout},
  name: 'app'
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background #fee
  padding 20px
</style>
