const files = require.context('@/api', true, /\.js$/)
let Api = []
files.keys().forEach(fileName => {
  if (fileName.includes('index.js')) return;
  let file = files(fileName)
  Api.push(file.default || file)
})
export default Api