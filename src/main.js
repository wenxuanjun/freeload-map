import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import AmapVueConfig from '@amap/amap-vue/lib/config'

Vue.config.productionTip = false
AmapVueConfig.key = 'ed5ff946c6eaa36a327380c3b57deff2'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
