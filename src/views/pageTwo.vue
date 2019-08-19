<template>
  <div class="page-two">
    <div>页面自带的信息：{{msg}}</div>
    <div>indexMixins附带的信息：{{defaultMsg}}</div>
    <div>
      <div>拼接filter测试信息：{{fMsg | joinStr('$$$')}}</div>
      <div>反转filter测试信息：{{fMsg | reserveStr}}</div>
    </div>
    <div class="vuex">
      <div class="msg">{{vuexMsg}}</div>
      <div>
        <span>请输入信息：</span>
        <input v-model="vMsg"/>
      </div>
      <div class="btns">
        <button @click="confirm">确定</button>
        <button @click="reset">重置</button>
        <button @click="sendAsyMsg">异步</button>
      </div>
    </div>
    <!-- components目录下组件自动化全局注册，不再需要import引入 -->
    <hello-world></hello-world>
  </div>
</template>

<script>
import indexMixins from '@/mixins/index.mixins'
export default {
  name: 'PageTwo',
  mixins: [indexMixins],
  data () {
    return {
      msg: 'this is page Two!',
      vMsg: this.vuexMsg,
      fMsg: 'this is filter msg!'
    }
  },
  computed: {
    vuexMsg () {
      return this.$store.state.msg
    }
  },
  methods: {
    confirm () {
      this.$store.commit ('setMsg', this.vMsg)
    },
    reset () {
      this.$store.commit ('resetMsg')
    },
    sendAsyMsg () {
      this.$store.dispatch('asyMsg')
    }
  },
  created () {
    this.printInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .page-two
    text-align left
    font-size 18px
    color #333
    &>div
      padding 20px
    .msg
      height 25px
      line-height 25px
    button
     margin 10px 5px
</style>