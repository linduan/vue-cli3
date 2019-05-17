const Routers = []
const files = require.context('@/router', true, /\.js$/)
files.keys().forEach(fileName => {
    if (fileName.includes('index.js')) return;
    let file = files(fileName)
    Routers.push(file.default || file)
})
export default Routers