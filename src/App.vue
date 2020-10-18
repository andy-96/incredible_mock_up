<template lang="pug">
  div#app
    b-navbar(fixed-top shadow)
      template(slot='brand')
        b-navbar-item(href='#')
          img(src='https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png' alt='Lightweight UI components for Vue.js based on Bulma')
      template(slot='end')
        b-navbar-item(href='#') Home
        b-navbar-item(href='#motivation')  Motivation
        b-navbar-item(href='#product') Produkt
        b-navbar-item(href='#preorder') Preorder
        b-navbar-item(href='#team') Team
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

html, body
  margin: 0
  padding: 0
  box-sizing: border-box
  font-size: 16pt

#app
  font-family: Bebas Neue, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>
