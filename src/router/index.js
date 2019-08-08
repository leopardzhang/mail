import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index.vue'
import addPerson from '@/pages/addPerson/index.vue'

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/index',
		name: 'index',
		component: index
	},
	{
		path: '/addPerson',
		name: 'addPerson',
		component: addPerson
	}, {
		path: '/*',
		redirect: '/index'
	}]
})