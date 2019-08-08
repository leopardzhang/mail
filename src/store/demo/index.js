import $apiConf from '@/config'

const state = {

}

const mutations = {

}

const actions = {
	async getData({
		commit,
        dispatch,
        state
	}, data) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.MANAGER_GET_PROJECT,
			params: {
				a: 12,
				b: 5
			}
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