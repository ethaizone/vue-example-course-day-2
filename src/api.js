import Vue from 'vue'

var api = {
  getJoke () {
    return Vue.axios.get('//api.icndb.com/jokes/random')
  }
}

export default api
