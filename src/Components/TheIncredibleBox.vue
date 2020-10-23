<template lang="pug">
.section.custom-section.the-incredible-box
  .container.the-incredible-box__container
    img.the-incredible-box__first-box(src="../images/incredible-box.png")
    img.the-incredible-box__second-box(src="../images/incredible-box.png")
    .text-block
      h3 The Incredible Box
      p Wo soll man eigentlich anfangen, wenn man in die vielseitige kulinarische Welt der Insekten eintauchen möchte? Unsere von Hand zusammengestellte INCREDIBLE BOX enthält dieleckersten und erfolgreichsten Produkte – vom hochwertigen Proteinpulver für den Muskelaufbau bis hin zu köstlichen Snacks für Zwischendurch. Das perfekte Geschenk für Freunde oder für dich selbst!

</template>

<script>
export default {
  name: "TheIncredibleBox"
}
</script>

<style lang="sass">
@import ../sass/mystyles

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
      padding-top: 5vh
      width: 30rem
      float: right

</style>