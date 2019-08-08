import Vue from 'vue'
import Vuex from 'vuex'

import $api from './$api'
import demo from './demo'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		$api,
		demo
	}
});

export default store;