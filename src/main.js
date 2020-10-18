import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './sass/mystyles.scss'

Vue.use(Buefy)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
