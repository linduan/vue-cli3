<template>
  <div class="page-two">
    <div>{{msg}}</div>
    <!-- components目录下组件自动化全局注册，不再需要import引入 -->
    <hello-world></hello-world>
  </div>
</template>

<script>
export default {
  name: 'PageTwo',
  data () {
    return {
      msg: 'this is page Two!'
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
  .page-two
    font-size 18px
    color #333
</style>