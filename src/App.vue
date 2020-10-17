<template lang="pug">
  div#app
    input(v-model="email")
    button(v-on:click="clickOnPreorder") Preorder Now!
</template>

<script>
import { db } from './db'

export default {
  name: 'App',
  data: () => ({
    email: ''
  }),
  methods: {
    async clickOnPreorder() {
      await db.collection('preorder-tracker').add({
        email: this.email
      })
      .then(() => alert('success!'))
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
