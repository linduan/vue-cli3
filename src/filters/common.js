export default {
  joinStr (val, dec) {
    return `${dec}  ${val}  ${dec}`
  },
  reserveStr (val) {
    if (!val) return val
    return val.split('').reverse().join('')
  }
}