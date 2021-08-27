import Vue from 'vue'
import App from './App.vue'
import AmapVueConfig from '@amap/amap-vue/lib/config'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false
AmapVueConfig.key = 'ed5ff946c6eaa36a327380c3b57deff2'

new Vue({
  render: h => h(App)
}).$mount('#app')