<template lang="pug">
  div#app
    button#preorder-button(v-on:click="clickOnPreorder") Preorder Now!
</template>

<script>
import { db } from './db'

export default {
  name: 'App',
  methods: {
    async clickOnPreorder() {
      await db.collection('tracker').doc('preorder-tracker').get()
        .then(async item => {
          const newCount = item.data().count + 1
          await db.collection('tracker').doc('preorder-tracker').update({
            count: newCount
          })
          .catch(err => console.error(err))
        })
        .then(() => alert('Sorry, aktuell ist es nicht mehr verfügbar. Versuche es später nochmal!'))
        .catch(err => console.error(err))
    }
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
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  height: 100vh
  width: 100vw
  margin: 0
  padding: 0
  background-color: black
  display: flex
  align-items: center
  justify-content: center

  #preorder-button
    font-family: 'Bebas Neue', cursive
    font-size: 2rem
    padding: 0.5rem 2rem
    color: white
    background: none
    cursor: pointer
    border:
      style: solid
      radius: 25px
      width: 2px
      color: #f9ff00
    
    &:hover
      transform: scale(1.1)
      background-color: #3f4000

    transition: all 0.3s ease

</style>
