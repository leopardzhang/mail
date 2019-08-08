import axios from 'axios'
import baseURL from '@/config/baseUrl'

axios.defaults.baseURL = baseURL;

const state = {

}

const mutations = {

}

const actions = {
	async $apiCall ({
		commit,
		dispatch,
		state
	}, {
		config,
		params = {}
	}) {
		let proxy = config.proxy;
		const dataType = {
			POST: 'data',
			GET: 'params'
		}
		proxy[dataType[proxy.method]] = params;

		const response = await axios(Object.assign({}, proxy));

		return response;
	}
}

const getters = {
	
}

export default {
    state,
    mutations,
    actions,
    getters
};