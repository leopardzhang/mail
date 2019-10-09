import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	
}

const mutations = {
}

const actions = {
	async setFriendEconomy ({
		state,
		commit,
		dispatch
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.UPDATE_ECONOMY,
			params: {
				results: params
			}
		})

		if (res.success == ERR_OK) {
			return 0;
		} else {
			throw Error('设置失败请重试');
		}
	}
}

const getters = {
	
}

export default {
	state,
	mutations,
	actions,
	getters
}