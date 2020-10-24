<template lang="pug">
  div#app
    b-navbar(fixed-top :transparent="true" spaced)
      template(slot='brand')
        b-navbar-item(href='#')
          img(src='./images/LOGO_DARK_GREEN.png' alt='incredible insects logo' width='140px' height='10px')
      template(slot='end')
        b-navbar-item(href='#') Home
        b-navbar-item(href='#motivation')  Warum Insekten?
        b-navbar-item(href='#the-incredible-box') The Incredible Box
        b-navbar-item(href='#preorder') Bestellen
    router-view
</template>

<script>
import { db } from './db'

export default {
  name: 'App',
  async mounted() {
    await db.collection('tracker').doc('page-tracker').get()
      .then(async item => {
        const newCount = item.data().count + 1
        await db.collection('tracker').doc('page-tracker').update({
          count: newCount
        })
        .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }
}
</script>

<style lang="sass">
@import ./sass/mystyles
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap')

body, html
  margin: 0
  padding: 0
  box-sizing: border-box
  font-size: 16pt
  overflow-x: hidden

#app
  font-family: Bebas Neue, Noto Sans JP, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

nav.navbar.is-fixed-top
  background: transparent
</style>
