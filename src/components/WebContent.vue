<template>
  <div>
    <span v-if="!content">** This is homepage **</span>
    <span v-else>Content is <b>{{ content }}</b></span>
    <h1>{{ storeKeyword }}</h1>
    <h2>Stupid: {{ storeStupid }}</h2>

    <button @click="callJoke">Get random joke.</button><br>
    <span style="font-size: 14px;">Joke <b v-html>{{ $store.state.currentJoke }}</b></span>
    
  </div>
</template>

<script>
import bus from './../bus'

var contentData = {
  content: null
}
bus.$on('goto', function (item) {
  contentData.content = item
})

export default {
  name: 'web-content',
  data () {
    return contentData
  },
  computed: {
    storeKeyword () {
      return this.$store.state.currentKeyword
    },
    storeStupid () {
      return this.$store.getters.stupid
    }
  },
  methods: {
    callJoke () {
      this.$store.dispatch('getJoke')
    }
  }
}
</script>

<style scoped>
div {
  margin-top: 20px;
  border: solid 3px red;
}
</style>
