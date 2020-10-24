import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './sass/mystyles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChild, faGlobeEurope, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
 
library.add(faChild, faGlobeEurope, faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
