<template lang="pug">
.section.custom-section.banner
  .container
    .banner__text
      h1 Wie wäre es mal mit was neuem?
      h3 Probiere jetzt die Zukunft
      .banner__buttons
        b-button(rounded).button.banner__button-order Jetzt bestellen
        b-button(rounded).button.banner__button-more Mehr erfahren
    img.banner__first-box(src="../images/incredible-box.png")
    img.banner__second-box(src="../images/incredible-box.png")
    img.banner__third-box(src="../images/incredible-box.png")
</template>

<script>
export default {
  name: "Banner"
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

.banner
  background-color: $gray-bg
  display: flex
  position: relative

  .banner__text
    width: 37vw
    z-index: 1
    position: absolute
    top: 60%
    transform: translateY(-70%)

    .banner__button-order
      color: white
      background-color: $primary-dark
      margin-right: 1rem
      
    .banner__button-more
      color: white
      background-color: $gray-button

  .banner__first-box
    position: absolute
    width: 45vw
    transform: rotate(-9deg)
    top: -10vh
    right: -32vw

  .banner__second-box
    position: absolute
    width: 50vw
    transform: rotate(20deg)
    top: 10vh
    right: 0
  
  .banner__third-box
    position: absolute
    width: 45vw
    transform: rotate(-12deg)
    right: 20vw
    top: 55vh
</style>