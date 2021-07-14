import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mixins: mixins
}).$mount('#app')
