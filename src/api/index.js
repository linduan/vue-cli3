const files = require.context('@/api', true, /\.js$/)
const $api = {}
files.keys().forEach(fileName => {
  if (fileName.includes('index.js')) return;
  let file = files(fileName)
  let apiClass = file.default || file
  let name = apiClass.constructor.name
  let key = name.replace(name[0], name[0].toLowerCase())
  $api[key] = apiClass
})
export default $api