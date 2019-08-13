import Vue from 'vue'
import Vuex from 'vuex'

import $api from './$api'
import demo from './demo'
import register from './register'
import login from './login'
import info from './info'

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		$api,
		demo,
		register,
		login,
		info
	}
});

export default store;