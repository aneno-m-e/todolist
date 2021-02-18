import Vue from 'vue'
import App from './App.vue'
import { v4 } from 'uuid';

Vue.use(v4)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
