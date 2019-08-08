import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@assets/normalize.css'

import store from '@/store'

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');