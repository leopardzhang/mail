import Vue from 'vue'
import Router from 'vue-router'
import $app from '@/pages/$app/index.vue'
import index from '@/pages/index/index.vue'
import personDetail from '@/pages/personDetail/index.vue'
import register from '@/pages/register/index.vue'
import login from '@/pages/login/index.vue'

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
			path: '/*',
			redirect: '/login'
		}
	]
})