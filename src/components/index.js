import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const Components = []
const files = require.context('@/components', true, /\.vue$/)
files.keys().forEach(fileName => {
  let component = files(fileName)
  const name = upperFirst(camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')))
  Components.push({name, component: component.default || component})
});

export default Components
