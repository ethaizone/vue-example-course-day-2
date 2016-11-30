import Vue from 'vue'

var api = {
  getJoke () {
    return Vue.axios.get('http://api.icndb.com/jokes/random')
  }
}

export default api
