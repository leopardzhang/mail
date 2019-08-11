import Vue from 'vue'
import Vuex from 'vuex'

import $api from './$api'
import demo from './demo'
import register from './register'
import login from './login'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		$api,
		demo,
		register,
		login
	}
});

export default store;