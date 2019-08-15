<template>
  <div class="page-one">
    <div>this is pageOne</div>
    <div class="btns">
      <button @click="sendGet">发送Get请求</button>
      <button @click="sendPost">发送Post请求</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageOne',
  data () {
    return {
      msg: 'this is page one!'
    }
  },
  methods: {
    sendGet () {
      this.$api.user.sendGet({ key: 'get', arr: [1, 2], obj: {key1: 'val1', key2: 'val2'} }).then(res => {
        console.log('http get request success!', res)
      }).catch(e => {
        console.log('http post request fail!', e)
      })
    },
    sendPost () {
      this.$api.user.sendPost({key: 'post', arr: [3, 4], obj: {key1: 'val1', key2: 'val2'} }).then(res => {
        console.log('http get request success!', res)
      }).catch(e => {
        console.log('http post request fail!', e)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .page-one
    font-size 18px
    color #333
  .btns
    text-align left
    button
      margin-right 20px
</style>