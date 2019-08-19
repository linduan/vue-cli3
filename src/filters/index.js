const filters = {}
const files = require.context('@/filters', true, /\.js$/)
files.keys().forEach(fileName => {
    if (fileName.includes('index.js')) return;
    const file = files(fileName)
    const filter = file.default || file
    let keys = Object.keys(filter)
    keys.forEach(key => (filters[key] = filter[key]))
})
export default filters