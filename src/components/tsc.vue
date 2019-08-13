<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'tsc',
  data () {
    return {
      msg: 'this is typeScript!'
    }
  },
  created () {
    let msg = 'Hello Word'
    console.log(msg)
  }
}
</script>

