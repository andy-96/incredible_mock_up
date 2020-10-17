<template lang="pug">
  div#app
    button(v-on:click="clickOnPreorder") Preorder Now!
</template>

<script>
import { db } from './db'

export default {
  name: 'App',
  methods: {
    async clickOnPreorder() {
      await db.collection('preorder-tracker').add({})
      .then(() => alert('This will be soon available!'))
      .catch(err => console.error(err))
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
