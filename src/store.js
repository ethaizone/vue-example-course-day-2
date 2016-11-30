import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentKeyword: 'default keyword',
    currentJoke: 'default joke'
  },
  actions: {
    getJoke (context) {
      context.commit('updateJoke', 'Loading....')
      api.getJoke().then((response) => {
        context.commit('updateJoke', response.data.value.joke)
      }).catch((response) => {
        context.commit('updateJoke', response)
      })
    },
    search (context, keyword) {
      context.commit('updateKeyword', keyword)
    }
  },
  mutations: {
    // es6 - arrow function as closure function
    updateKeyword: (state, keyword) => {
      state.currentKeyword = keyword
    },
    updateJoke: (state, keyword) => {
      state.currentJoke = keyword
    }
  },
  getters: {
    // es6 - arrow function as closure function
    stupid: state => {
      return state.currentKeyword.split('').reverse().join('|')
    }
  }
})
