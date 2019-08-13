import Vue from 'vue'
import Router from 'vue-router'
import $app from '@/pages/$app/index.vue'
import index from '@/pages/index/index.vue'
import personDetail from '@/pages/personDetail/index.vue'
import register from '@/pages/register/index.vue'
import login from '@/pages/login/index.vue'
import hobby from '@/pages/hobby/index.vue'
import healthy from '@/pages/healthy/index.vue'
import economy from '@/pages/economy/index.vue'

Vue.use(Router);

export default new Router({
	routes: [{
			path: '/register',
			name: 'register',
			component: register
		}, {
			path: '/login',
			name: 'login',
			component: login
		}, {
			path: '/$app',
			name: '$app',
			component: $app,
			children: [
				{
					path: '/index',
					name: 'index',
					component: index
				},
				{
					path: '/personDetail',
					name: 'personDetail',
					component: personDetail
				}
			]
		}, {
			path: '/hobby',
			name: 'hobby',
			component: hobby
		}, {
			path: '/healthy',
			name: 'healthy',
			component: healthy
		}, {
			path: '/economy',
			name: 'economy',
			component: economy
		}, {
			path: '/*',
			redirect: '/login'
		}
	]
})