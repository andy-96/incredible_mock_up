<template lang="pug">
div
  .section.header-custom-section#header
    .container
      h1.title Header
      b-button(@click="clickOnMoreInfo") Erfahre mehr
  .navbar-spacer#motivation
  .section.custom-section
    .container
      h1.title Motivation
  .navbar-spacer#product
  .section.custom-section
    .container
      h1.title Produkt
  .navbar-spacer#preorder
  .section.custom-section
    .container
      h1.title Preorder
      b-field(
        label='Email'
      )
        b-input(placeholder="max.mustermann@email.de" v-model="preorderEmail")
      b-button#preorder-button(v-on:click="clickOnPreorder") Preorder Now!
  .navbar-spacer#team
  .section.custom-section
    .container
      h1.title Team
</template>

<script>
import { db } from '../db'
import emailjs from 'emailjs-com'

export default {
  name: "LandingPage",
  data: () => ({
    preorderEmail: ''
  }),
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
      console.log(this.preorderEmail)
      await emailjs.sendForm()
    },
    clickOnMoreInfo() {
      console.log('more info')
    }
  },
}
</script>

<style lang="sass" scoped>
.header-custom-section
  height: calc(100vh - 56px)
.custom-section
  height: 100vh

.navbar-spacer
  height: 56px

#preorder-button
  font-family: 'Bebas Neue', cursive
  font-size: 2rem
  padding: 0.5rem 2rem
  color: black
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