import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@assets/normalize.css'
// import '@assets/bootstrap.css'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

import store from '@/store'

Vue.use(MintUI)
Vue.use(vueEventCalendar, {locale: 'zh', color:'#f8d992'})

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');