<template lang="pug">
  div#app
    b-navbar(fixed-top)
      template(slot='brand')
        b-navbar-item(href='#')
          img(src='./images/ii-logo.png' alt='incredible insects logo' width='100px' height='10px')
      template(slot='end')
        b-navbar-item(href='#')#text Home
        b-navbar-item(href='#motivation')#text  Motivation
        b-navbar-item(href='#product')#text Produkt
        b-navbar-item(href='#preorder')#text Preorder
        b-navbar-item(href='#team')#text Team
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
  font-family: Bebas Neue, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

#text
  font-family: Noto Sans JP
</style>
