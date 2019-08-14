// 此处需要配置对应接口nodeApi标志
const nodeApi = process.NODE_API || 'dev'
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