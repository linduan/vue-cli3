<template>
  <div class="page-two">
    <div>{{msg}}</div>
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
export default {
  name: 'PageTwo',
  data () {
    return {
      msg: 'this is page Two!',
      vMsg: this.vuexMsg
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
  }
}
</script>

<style lang="stylus" scoped>
  .page-two
    font-size 18px
    color #333
    .vuex
      margin 20px
      .msg
        height 25px
        line-height 25px
      .btns
        margin 10px
        button
         margin 0px 5px
</style>