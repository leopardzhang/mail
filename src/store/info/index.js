import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {

}

const mutations = {

}

const actions = {
	async setHealthy({
		commit,
        dispatch,
        state
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.UPDATE_HEALTHY,
			params: {
				results: params
			}})

			if(res.obj.code == ERR_OK) {
				return 0;
			} else {
				throw Error('设置失败请重试');
			}
	},

	async getHobbyList({
		commit,
		dispatch,
		state
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.GET_HOBBY_LIST,
			params: {
				results: params
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