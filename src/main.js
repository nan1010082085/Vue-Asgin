import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* element ui */
import './components/element'


/* login */
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

/* reset public css */
import './assets/css/reset.less'
import './assets/css/public.less'

/* devtools */
Vue.config.productionTip = false
Vue.config.devtools = process.env.VUE_APP_NODESHL === 'DEV'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
