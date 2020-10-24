<template lang="pug">
div
  .section.custom-section#header
    img.pattern-one(src="../images/INS_PATTERN_BLACK.png")
    img.pattern-two(src="../images/INS_PATTERN_BLACK.png")
    img.pattern-three(src="../images/INS_PATTERN_BLACK.png")
    .container
      .header__text
        h1 Wie wäre es mal mit was neuem?
        h3 Probiere jetzt die Zukunft
        .header__buttons
          b-button.button.header__button-order(rounded @click="clickOnHeaderPreorder") Jetzt bestellen
          b-button.button.header__button-more(rounded @click="clickOnMoreInformation") Mehr erfahren
      img.header__first-box(src="../images/incredible-box.png")
      img.header__second-box(src="../images/incredible-box.png")
      img.header__third-box(src="../images/incredible-box.png")
  .section.custom-section#motivation
    .container.motivation__container
      .text-block
        h3 Gut für dich + gut für die Umwelt
        p Während sich die Studien über krebsauslösende Stoffe in Rindfleisch und Geflügel häufen, gibt es eine gesunde und bereits weltweit verbreitete Alternative: Insekten. Besonders durch ihren hohen Anteil an ungesättigten Fettsäuren, Vitaminen und Mineralstoffen werden Insekten bei Kraft- und Leistungssportlern seit einigen Jahren immer beliebter. Die Zahlen sprechen für sich:
      .motivation__diagrams
        diagram.motivation__diagram(
          v-for="(data, index) in diagramData"
          :key="index"
          :insectValue="data.insectValue"
          :meatValue="data.meatValue"
          :insectValueDescription="data.insectValueDescription"
          :meatValueDescription="data.meatValueDescription"
          :description="data.description"
        )
  .section.custom-section#the-incredible-box
    img.pattern-four(src="../images/INS_PATTERN_BLACK.png")
    .container.the-incredible-box__container
      img.the-incredible-box__first-box(src="../images/incredible-box.png")
      img.the-incredible-box__second-box(src="../images/incredible-box.png")
      .text-block
        h3 The Incredible Box
        p Wo soll man eigentlich anfangen, wenn man in die vielseitige kulinarische Welt der Insekten eintauchen möchte? Unsere von Hand zusammengestellte INCREDIBLE BOX enthält dieleckersten und erfolgreichsten Produkte – vom hochwertigen Proteinpulver für den Muskelaufbau bis hin zu köstlichen Snacks für Zwischendurch. Das perfekte Geschenk für Freunde oder für dich selbst!
  .section.custom-section.our-values
    .container.our-values__container
      .our-values__title-block
        h2.our-values__title Das ist uns 
        h2.our-values__title
          span.underline besonders
          |  wichtig
      .our-values__values
        .text-block
          font-awesome-icon.our-values__values-icon(:icon="['fas', 'child']" size="4x")
          h4 Höchste Qualität
          p Alle Produkte in unserer INCREDIBLE BOX beziehen ihre Rohstoffe von nachhaltigen Industriepartnern. Sie wurden unter hohen Qualitätsanforder-ungen geprüft und sind in Deutschland zugelassen.
        .text-block
          font-awesome-icon.our-values__values-icon(:icon="['fas', 'globe-europe']" size="4x")
          h4 Höchste Qualität
          p Alle Produkte in unserer INCREDIBLE BOX beziehen ihre Rohstoffe von nachhaltigen Industriepartnern. Sie wurden unter hohen Qualitätsanforder-ungen geprüft und sind in Deutschland zugelassen.
        .text-block
          font-awesome-icon.our-values__values-icon(:icon="['fas', 'heart']" size="4x")
          h4 Höchste Qualität
          p Alle Produkte in unserer INCREDIBLE BOX beziehen ihre Rohstoffe von nachhaltigen Industriepartnern. Sie wurden unter hohen Qualitätsanforder-ungen geprüft und sind in Deutschland zugelassen.
  .section#preorder
    img.pattern-five(src="../images/INS_PATTERN_BLACK.png")
    img.pattern-six(src="../images/INS_PATTERN_BLACK.png")
    .container.preorder__container
      h3 Worauf Wartest du noch?
      p.preorder__text Du möchtest eine INCREDIBLE BOX bestellen? Für nur 39,99 EUR erhältst du ein spannendes Überraschungspaket mit einer Auswahl an leckeren Insekten-Snacks von verschiedenen Herstellern. 
      input.preorder__input(placeholder="Name" v-model="preorderName")
      input.preorder__input(placeholder="E-Mail" v-model="preorderEmail")
      b-button.button.preorder__button(@click="clickOnPreorder" rounded :loading="preorderIsLoading") Jetzt bestellen
  .footer.page-footer
    .text-block
      p Made with ♥️ by
      img(src='../images/LOGO_DARK_GREEN.png' width='140px' height='10px')
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
    preorderName:'',
    preorderIsLoading: false,
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
        insectValue: 15,
        meatValue: 100,
        insectValueDescription: '3,6 SQM',
        meatValueDescription: '38 SQM',
        description: 'Landnutzung pro Kilogramm'
      },
    ]
  }),
  methods: {
    async clickOnPreorder() {
      this.preorderIsLoading = true
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
        user_name: this.preorderName,
        user_email: this.preorderEmail
      }, VUE_APP_emailjs_userID)
        .then(() => {
          this.preorderEmail = ''
          this.preorderName = ''
          this.preorderIsLoading = false
          alert('Wir werden in den nächsten zwei Tagen Kontakt mit dir aufnehmen!')
        })
        .catch(err => {
          alert('Irgendwas ist schief gelaufen... Versuche es später nochmal!')
          console.error(err)
        })
    },
    clickOnHeaderPreorder() {
      document.getElementById('preorder').scrollIntoView()
    },
    clickOnMoreInformation() {
      document.getElementById('the-incredible-box').scrollIntoView()
    }
  },
}
</script>

<style lang="sass" scoped>
@import ../sass/mystyles
@import ../sass/landingPageStyle




</style>