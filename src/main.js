import Vue from 'vue'
import App from './App'
import PrismicVue from '@prismicio/vue'
import linkResolver from './prismic/link-resolver' // Update this path if necessary

const accessToken =
  'MC5ZRzhYTkJNQUFDSUFpa09f.77-9Tg3vv70B77-977-9GSzvv70V77-9GBdB77-977-9HRUS77-9F--_vVfvv73vv706ARDvv73vv73vv70' // Leave empty if your repo is public
const endpoint =
  'https://characterscope-engineering-recruitment.cdn.prismic.io/api/v2' // Use your repo name

Vue.config.productionTip = false

// Register plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken },
  linkResolver,
})

// Create a Vue instance
new Vue({
  render: (h) => h(App),
}).$mount('#app')
