import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentKeyword: 'default keyword'
  },
  actions: {
    // es6 - named function
    search (context, keyword) {
      // window.alert('Search!! ' + keyword)
      context.commit('updateKeyword', keyword)
    }
  },
  mutations: {
    // es6 - arrow function as closure function
    updateKeyword: (state, keyword) => {
      state.currentKeyword = keyword
    }
  },
  getters: {
    // es6 - arrow function as closure function
    stupid: state => {
      return state.currentKeyword.split('').reverse().join('|')
    }
  }
})
