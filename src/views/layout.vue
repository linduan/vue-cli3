<template>
  <div class="layout">
    <nav>{{nav}}</nav>
    <div class="nav-link">
      <router-link :to="{name: 'Comp1'}">Comp1</router-link>
      <router-link :to="{name: 'PageOne'}">PageOne</router-link>
      <router-link :to="{name: 'PageTwo'}">PageTwo</router-link>
      <router-link :to="{name: 'MissingPage'}">404</router-link>
    </div>
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
      heigth 30px
      line-height 30px
      padding-left 20px
    .nav-link
      text-align left
      padding 10px
      a
        margin-right 20px
    .content
      margin-top 10px
      background #eef
      min-height 600px
</style>