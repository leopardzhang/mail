import Vue from 'vue'
import Vuex from 'vuex'

import $api from './$api'
import demo from './demo'
import register from './register'
import login from './login'
import info from './info'
import memorandum from './memorandum'
import friends from './friends'

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		$api,
		demo,
		register,
		login,
		info,
		memorandum,
		friends
	}
});

export default store;