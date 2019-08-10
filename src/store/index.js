import Vue from 'vue'
import Vuex from 'vuex'

import $api from './$api'
import demo from './demo'
import register from './register'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		$api,
		demo,
		register
	}
});

export default store;