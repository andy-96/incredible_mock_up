<template lang="pug">
div
  .section.custom-section#header
    .container
      .header__text
        h1.header__title Wie wäre es mal mit was neuem?
        h3 Probiere jetzt die Zukunft
        .header__buttons
          b-button(rounded).button.header__button-order Jetzt bestellen
          b-button(rounded).button.header__button-more Mehr erfahren
      img.header__first-box(src="../images/incredible-box.png")
      img.header__second-box(src="../images/incredible-box.png")
      img.header__third-box(src="../images/incredible-box.png")
  .navbar-spacer#motivation
  .section.custom-section.motivation
    .container.motivation__container
      .text-block
        h3 Gut für dich + gut für die Umwelt
        p Während sich die Studien über krebsauslösende Stoffe in Rindfleisch und Geflügel häufen, gibt es eine gesunde und bereits weltweit verbreitete Alternative: Insekten. Besonders durch ihren hohen Anteil an ungesättigten Fettsäuren, Vitaminen und Mineralstoffen werden Insekten bei Kraft- und Leistungssportlern seit einigen Jahren immer beliebter. Die Zahlen sprechen für sich:
      .motivation__diagrams
        diagram(
          v-for="data in diagramData"
          :insectValue="data.insectValue"
          :meatValue="data.meatValue"
          :insectValueDescription="data.insectValueDescription"
          :meatValueDescription="data.meatValueDescription"
          :description="data.description"
        )
  .navbar-spacer#the-incredible-box.the-incredible-box
  .section.custom-section.the-incredible-box
    .container.the-incredible-box__container
      img.the-incredible-box__first-box(src="../images/incredible-box.png")
      img.the-incredible-box__second-box(src="../images/incredible-box.png")
      .text-block
        h3 The Incredible Box
        p Wo soll man eigentlich anfangen, wenn man in die vielseitige kulinarische Welt der Insekten eintauchen möchte? Unsere von Hand zusammengestellte INCREDIBLE BOX enthält dieleckersten und erfolgreichsten Produkte – vom hochwertigen Proteinpulver für den Muskelaufbau bis hin zu köstlichen Snacks für Zwischendurch. Das perfekte Geschenk für Freunde oder für dich selbst!
  .navbar-spacer
  .section.custom-section.our-values
    .container.our-values__container
      h2.our-values__title Das ist uns 
      h2.our-values__title besonders wichtig
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
import Diagram from '../Components/Diagram'
import emailjs from 'emailjs-com'
import dotenv from 'dotenv'
dotenv.config()

const { VUE_APP_emailjs_serviceID, VUE_APP_emailjs_templateID, VUE_APP_emailjs_userID } = process.env

export default {
  name: "LandingPage",
  components: {
    diagram: Diagram
  },
  data: () => ({
    preorderEmail: '',
    diagramData: [
      {
        insectValue: 100,
        meatValue: 33,
        insectValueDescription: '62%',
        meatValueDescription: '23%',
        description: 'Protein pro 100 Gramm'
      },
      {
        insectValue: 10,
        meatValue: 90,
        insectValueDescription: '2,7 KG',
        meatValueDescription: '23 KG',
        description: 'CO2 Äquivalente pro KG'
      },
      {
        insectValue: 100,
        meatValue: 15,
        insectValueDescription: '38 SQM',
        meatValueDescription: '3,6 SQM',
        description: 'Landnutzung pro Kilogramm'
      },
    ]
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
    top: 30%

    .header__title
      font-size: 6rem
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
    top: 10vh
    right: 0
  
  .header__third-box
    position: absolute
    width: 45vw
    transform: rotate(-12deg)
    right: 20vw
    top: 55vh

.motivation
  .motivation__container
    display: flex
    position: relative
    
    .text-block
      padding-top: 5vh
      flex: 1
      width: 30rem
    
    .motivation__diagrams
      flex: 2
      float: right
      display: flex

.the-incredible-box
  background-color: $gray-bg
  .the-incredible-box__container

    .the-incredible-box__first-box
      position: absolute
      width: 50vw
      transform: rotate(14deg)
      top: -10vh
      left: -15vw

    .the-incredible-box__second-box
      position: absolute
      width: 45vw
      transform: rotate(-12deg)
      top: 40vh
      left: 0

    .text-block
      width: 30rem
      float: right

.our-values
  .our-values__container
    .our-values__title
      text-align: center
      

</style>