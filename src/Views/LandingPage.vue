<template lang="pug">
div
  banner
  .navbar-spacer#motivation
  motivation
  .navbar-spacer#the-incredible-box.the-incredible-box
  the-incredible-box
  .navbar-spacer
  .section.custom-section.our-values
    .container.our-values__container
      h2.our-values__title Das ist uns 
      h2.our-values__title
        span.underline besonders
        |  wichtig
  .navbar-spacer#preorder.preorder
  .section.preorder__section.preorder
    .container
      h3 Worauf wartest du noch?
      p Du möchtest eine INCREDIBLE BOX bestellen? Für nur 39,99 EUR erhältst du ein spannendes Überraschungspaket mit einer Auswahl an leckeren Insekten-Snacks von verschiedenen Herstellern. 
      b-input(placeholder="Name" v-model="preorderName" rounded).preorder__input
      b-input(placeholder="E-Mail" v-model="preorderEmail" rounded).preorder__input
      b-button.button.preorder__button(@click="clickOnPreorder" rounded) Jetzt bestellen
  .navbar-spacer#contact
  .section.custom-section
    .container
      h1.title Team
  .footer
    h1 footer
</template>

<script>
import { db } from '../db'
import Banner from '../Components/Banner'
import Motivation from '../Components/Motivation'
import TheIncredibleBox from '../Components/TheIncredibleBox'
import emailjs from 'emailjs-com'
import dotenv from 'dotenv'
dotenv.config()

const { VUE_APP_emailjs_serviceID, VUE_APP_emailjs_templateID, VUE_APP_emailjs_userID } = process.env

export default {
  name: "LandingPage",
  components: {
    banner: Banner,
    motivation: Motivation,
    'the-incredible-box': TheIncredibleBox
  },
  data: () => ({
    preorderName: '',
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
        .catch(err => console.error(err))
      emailjs.send(VUE_APP_emailjs_serviceID, VUE_APP_emailjs_templateID, {
        user_email: this.preorderEmail
      }, VUE_APP_emailjs_userID)
        .then(() => console.log('Success!'))
        .catch(err => console.error(err))
    },
    clickOnMoreInfo() {
      console.log('more info')
    }
  },
}
</script>

<style lang="sass">
@import ../sass/mystyles

h1
  font-size: 6rem
  color: $primary-dark
  margin-bottom: 1rem

h2
  font-size: 4rem
  color: $primary-dark

h3
  font-size: 2rem
  color: $primary-dark
  margin-bottom: 1rem

p
  font-size: 0.9rem
  font-family: $text-font
  line-height: 200%
  color: $gray-text

.custom-section:first-child
  height: 100vh
  margin-top: -84px

.custom-section
  height: 100vh
  padding-top: 10vh

.navbar-spacer
  height: 84px

.underline
  text-decoration: underline $accent

.button
  font-size: 0.8rem
  height: 2.7rem
  width: 9.5rem
  font-weight: bold
  color: white
  font-family: $text-font
  border-style: none
  box-shadow: 0px 3px 6px $shadow-color

.our-values
  .our-values__container
    .our-values__title
      text-align: center

.preorder__section
  padding-bottom: 132px

.preorder
  background-color: $primary-bright
  margin-left: auto
  margin-right: auto

  .preorder__button
    color: white
    background-color: $primary-dark

  .preorder__input
    width: 30rem


</style>