<template lang="pug">
  section.main__section
    button.preorder-button(v-on:click="clickOnPreorder") Preorder Now!
</template>

<script>
import { db } from '../db'
export default {
  name: 'Main',
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
    }
  },
  async mounted() {
    document.title = this.$route.meta.title
    await db.collection('tracker').doc('page-tracker').get()
      .then(async item => {
        const newCount = item.data().count + 1
        await db.collection('tracker').doc('page-tracker').update({
          count: newCount
        })
        .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
@import ../sass/mystyles

.main__section
  background-color: $gray-bg
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  margin-top: -84px

  .preorder-button
    font-family: 'Bebas Neue'
    font-size: 2rem
    padding: 0.5rem 2rem
    color: white
    background: $primary-dark
    cursor: pointer
    border:
      style: none
      radius: 25px
    
    &:hover
      transform: scale(1.1)
      background-color: $accent
    transition: all 0.3s ease

@media screen and (max-width: 1024px)
  .main__section
    margin-top: -52px
</style>