import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	car: ['凯美瑞', '速派', '帕萨特']
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

		if (res.obj.code == ERR_OK) {
			return 0;
		} else {
			throw Error('设置失败请重试');
		}

		console.log(res);
	}
}

const getters = {
	car(state) {
		return state.car
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}