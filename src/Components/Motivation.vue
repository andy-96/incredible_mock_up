<template lang="pug">
  .section.custom-section.motivation
    .container.motivation__container
      .text-block
        h3 Gut für dich + gut für die Umwelt
        p Während sich die Studien über krebsauslösende Stoffe in Rindfleisch und Geflügel häufen, gibt es eine gesunde und bereits weltweit verbreitete Alternative: Insekten. Besonders durch ihren hohen Anteil an ungesättigten Fettsäuren, Vitaminen und Mineralstoffen werden Insekten bei Kraft- und Leistungssportlern seit einigen Jahren immer beliebter. Die Zahlen sprechen für sich:
      .motivation__diagrams
        diagram(
          v-for="(data, index) in diagramData"
          :key="index"
          :insectValue="data.insectValue"
          :meatValue="data.meatValue"
          :insectValueDescription="data.insectValueDescription"
          :meatValueDescription="data.meatValueDescription"
          :description="data.description"
        )
</template>

<script>
import Diagram from '../Components/Diagram'

export default {
  name: "Motivation",
  components: {
    diagram: Diagram
  },
  data: () => ({
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
  })
}
</script>

<style lang="sass">
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

</style>