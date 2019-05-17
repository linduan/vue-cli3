<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
    console.log(this.$api.user.getUser())
  }
}
</script>