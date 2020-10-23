<template lang="pug">
.diagram
  .diagram__container
    .diagram__column(
      :style="{ transform: 'translate(-40px)' }"
    )
      h4.diagram__indicator {{ insectValueDescription }}
      .diagram__bar.dark(
        :style="{ height: insectValue * 0.6 + 'vh' }"
      )
      .diagram__icon
    .diagram__column(
      :style="{ transform: 'translate(40px)' }"
    )
      h4.diagram__indicator {{ meatValueDescription }}
      .diagram__bar.bright(
        :style="{ height: meatValue * 0.6  + 'vh' }"
      )
      .diagram__icon
  h4.diagram__description {{ description }}

</template>

<script>
export default {
  name: "Diagram",
  props: {
    insectValue: Number,
    meatValue: Number,
    insectValueDescription: String,
    meatValueDescription: String,
    description: String
  }
}
</script>

<style lang="sass" scoped>
@import ../sass/mystyles

.dark
  background-color: $primary-dark

.bright
  background-color: $primary

h4
  font-size: 1.5rem
  color: $primary-dark

.diagram
  width: 250px
  height: 70vh
  position: relative

  .diagram__container
    display: flex
    justify-content: space-around
    
    .diagram__column
      position: absolute
      bottom: 50px

      .diagram__indicator
        text-align: center
        
      .diagram__bar
        width: 3rem
        border-radius: 0.5rem

  .diagram__description
    position: absolute
    bottom: 0
    margin: auto
    left: 0
    right: 0
    text-align: center
</style>