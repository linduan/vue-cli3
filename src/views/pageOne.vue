<template>
  <div class="page-one">
    <div>this is pageOne</div>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/helloWorld'
export default {
  name: 'PageOne',
  components: {HelloWorld},
  data () {
    return {
      msg: 'this is page one!'
    }
  },
  created () {
    this.$api.user.getUser({prod: 'pc_his'}).then(res => {
      alert('http request success!')
      console.log(res)
    }).catch(e => {
      alert('http request fail!')
      console.log(e)
    })
  },
  methods: {
    getMsg () {}
  }
}
</script>

<style lang="stylus" scoped>
  .page-one
    font-size 18px
    color #333
</style>