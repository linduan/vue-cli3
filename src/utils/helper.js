const helper = {
  isArray (target) {
    return toString.call(target) === '[object Array]'
  }
}
export default helper