<template>
  <div class="layout">
    <nav>{{nav}}</nav>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      nav: ''
    }
  },
  watch: {
    $route () {
      const {nav} = this.$route.meta
      this.nav = nav
      console.log('nav:', nav)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .layout
    nav
      text-align left
      font-weight bold
      background #eee
      padding 20px
    .content
      margin-top 10px
      background #eef
      min-height 600px
</style>