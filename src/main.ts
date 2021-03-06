import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"

import VueCompositionApi from "@vue/composition-api"
Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h: any): any => h(App)
}).$mount("#app")
