<template lang="pug">
.diagram
  .diagram__container(v-if="isDesktopView")
    .diagram__column(:style="{ 'transform': 'translateX(-3vw)'}")
      h4.diagram__indicator {{ insectValueDescription }}
      .diagram__bar.dark(
        :style="{ height: insectValue * 0.5 + 'vh' }"
      )
      .diagram__icon
    .diagram__column(:style="{ 'transform': 'translateX(3vw)'}")
      h4.diagram__indicator {{ meatValueDescription }}
      .diagram__bar.bright(
        :style="{ height: meatValue * 0.5  + 'vh' }"
      )
      .diagram__icon
  h4.diagram__description {{ description }}
  <!-- Mobile View -->
  .diagram__container(v-if="isDesktopView === false")
    .diagram__column
      .diagram__icon
      .diagram__bar.dark(:style="{ width: insectValue * 0.8 + 'vw' }")
      h4.diagram__indicator {{ insectValueDescription }}
    .diagram__column
      .diagram__icon
      .diagram__bar.bright(:style="{ width: meatValue * 0.8  + 'vw' }")
      h4.diagram__indicator {{ meatValueDescription }}

</template>

<script>
export default {
  name: "Diagram",
  data: () => ({
    isDesktopView: false,
  }),
  props: {
    insectValue: Number,
    meatValue: Number,
    insectValueDescription: String,
    meatValueDescription: String,
    description: String
  },
  methods: {
    isMobile() {
      if (window.innerWidth > 700) {
        this.isDesktopView = true
      } else {
        this.isDesktopView = false
      }
    }
  },
  created() {
    window.addEventListener('resize', this.isMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.isMobile)
  },
  mounted() {
    this.isMobile()
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

@media screen and (max-width: 1024px)
  h4
    font-size: 1rem
    color: $primary-dark
    
.diagram
  width: 250px
  height: 70vh
  position: relative
  
  .diagram__container
    display: flex
    justify-content: center

    .diagram__column
      position: absolute
      bottom: 50px

      .diagram__indicator
        text-align: center
        
      .diagram__bar
        width: 3rem
        border-radius: 0.5rem

      @media screen and (max-width: 1024px)
        .diagram__bar
          width: 2rem
          border-radius: 0.5rem

  .diagram__description
    position: absolute
    bottom: 0
    text-align: center
    width: 100%

@media screen and (max-width: 1024px)
  .diagram
    width: 20vw
    height: 70vh
    position: relative

@media screen and (max-width: 700px)
  .diagram
    width: 100%
    height: 100%
    position: relative
    margin-top: 2rem
    display: block

    .diagram__container
      display: block
      
      .diagram__column
        position: relative
        display: flex
        bottom: auto

        .diagram__indicator
          width: 3rem
          
        .diagram__bar
          height: 2rem
          border-radius: 0.5rem
          margin-bottom: 1.5rem
          margin-right: 0.5rem

    .diagram__description
      text-align: left
      display: block
      bottom: auto
      position: static
      margin-bottom: 1rem

</style>