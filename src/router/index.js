import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index.vue'
import personDetail from '@/pages/personDetail/index.vue'
import register from '@/pages/register/index.vue'
import $app from '@/pages/$app/index.vue'

Vue.use(Router);

export default new Router({
	routes: [{
			path: '/register',
			name: 'register',
			component: register
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
			redirect: '/register'
		}
	]
})