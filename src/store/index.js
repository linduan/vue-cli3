import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
    msg: 'this is Vuex msg!'
  },
  mutations: {
    setMsg (state, msg) {
      state.msg = msg
    },
    resetMsg (state) {
      state.msg = 'this is Vuex msg!'
    },
    asyMsg (state, asyMsg) {
      state.msg = asyMsg
      console.log(asyMsg)
    }
  },
  actions: {
    asyMsg ({ commit }) {
      setTimeout(() => {
        commit('asyMsg', 'this is asyMsg!')
      }, 1000)
    }
  }
})

export default store
