<template lang="pug">
  div#app
    b-navbar(fixed-top)
      template(slot='brand')
        b-navbar-item(href='#')
          img(src='./images/ii-logo.png' alt='incredible insects logo' width='140px' height='10px')
      template(slot='end')
        b-navbar-item(href='#') home
        b-navbar-item(href='#motivation')  motivation
        b-navbar-item(href='#product') produkt
        b-navbar-item(href='#preorder') preorder
        b-navbar-item(href='#team') team
    landing-page
</template>

<script>
import { db } from './db'
import LandingPage from './Views/LandingPage'

export default {
  name: 'App',
  components: {
    "landing-page": LandingPage
  },
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
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap')

html, body
  margin: 0
  padding: 0
  box-sizing: border-box
  font-size: 16pt

#app
  font-family: Noto Sans JP, Bebas Neue, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
