import $apiConf from '@/config'

const state = {

}

const mutations = {

}

const actions = {
	async register({
		commit,
        dispatch,
        state
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.REGISTER,
			params: JSON.stringify({
				results: params
			})
		});

		console.log(res);
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