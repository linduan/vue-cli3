<template>
  <div class="hello">
    <div class="hello">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is hello world!'
    }
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
.hello
  text-align center
</style>
