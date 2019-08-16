// 此处需要配置对应接口nodeApi标志
const nodeApi = process.NODE_API || 'dev'
// 通过在package.json中配置script命令时传递模式 --mode [mode]可以获取到对应配置文件的值
// 如 --mode dev 时process获取.env.dev中的配置加入到process中
// 但是能够配置的字段有限（NODE_ENV，BASE_URL，VUE_APP_*）
// 要模拟不同环境下环境变量，请执行 npm run build:[mode],并到dist目录下将index.html中css/js路径改为相对路径
// 即可以直接打开index.html查看运行结果
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_API)
console.log(process.env.VUE_APP_SELF_DEFIND_PARAMS)
const api = {
  apiV1: {
    dev: 'https://www.baidu.com/sugrec/',
    test: 'http://xxx/xx/xx',
    production: 'http://xx/xx'
  }
}
export default class Base {
  constructor () {
    this.apiV1 = api.apiV1[nodeApi]
  }
}