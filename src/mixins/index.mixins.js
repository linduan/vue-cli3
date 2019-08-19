/*
** 抽离出公共配置【用于整体调节】
*/
export default {
  data () {
    return {
      defaultMsg: 'this is commom message from mixins!'
    }
  },
  methods: {
    printInfo () {
      console.log(this.defaultMsg)
    }
  }
}