<template lang="pug">
div
  .section.custom-section#header
    .container
      .header__text
        h1.header__title Wie wäre es mal mit was neuem?
        h2.header__subtitle Probiere jetzt die Zukunft
        .header__buttons
          b-button(rounded).button.header__button-order Jetzt bestellen
          b-button(rounded).button.header__button-more Mehr erfahren
      img.header__first-box(src="../images/incredible-box.png")
      img.header__second-box(src="../images/incredible-box.png")
      img.header__third-box(src="../images/incredible-box.png")
  .navbar-spacer#motivation
  .section.custom-section
    .container
      h1.title Motivation
  .navbar-spacer#the-incredible-box
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
      button#preorder-button(@click="clickOnPreorder") Preorder Now!
  .navbar-spacer#contact
  .section.custom-section
    .container
      h1.title Team
  .footer
    h1 footer
</template>

<script>
import { db } from '../db'
import emailjs from 'emailjs-com'
import dotenv from 'dotenv'
dotenv.config()

const { VUE_APP_emailjs_serviceID, VUE_APP_emailjs_templateID, VUE_APP_emailjs_userID } = process.env

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

<style lang="sass" scoped>
@import ../sass/mystyles

.custom-section:first-child
  height: 100vh
  margin-top: -84px

.custom-section
  height: 100vh

.navbar-spacer
  height: 56px

.button
  font-size: 0.8rem
  height: 2.7rem
  width: 9.5rem
  font-weight: bold
  color: white
  font-family: $text-font
  border-style: none
  box-shadow: 0px 3px 6px $shadow-color

#header
  background-color: $gray-bg
  display: flex
  position: relative

  .header__text
    width: 37vw
    z-index: 1
    position: absolute
    top: 50%
    transform: translateY(-70%)

    .header__title
      font-size: 6rem
      color: $primary-dark
      margin-bottom: 1rem

    .header__subtitle
      font-size: 2rem
      color: $primary-dark
      margin-bottom: 1rem

    .header__button-order
      color: white
      background-color: $primary-dark
      margin-right: 1rem
      
    .header__button-more
      color: white
      background-color: $gray-button

  .header__first-box
    position: absolute
    width: 45vw
    transform: rotate(-9deg)
    top: -10vh
    right: -32vw

  .header__second-box
    position: absolute
    width: 50vw
    transform: rotate(20deg)
    top: 5vh
    right: 0
  
  .header__third-box
    position: absolute
    width: 45vw
    transform: rotate(-12deg)
    right: 20vw
    top: 45vh


</style>