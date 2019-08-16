import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	flavor: ['酸', '甜', '苦', '辣', '咸', '酸甜', '酸辣'],
	food: ['米饭', '馒头', '打卤面', '烧饼', '饺子', '火锅'],
	dish: ['鱼香肉丝', '京酱肉丝', '锅包肉', '豆角']
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
	flavor(state) {
		return state.flavor
	},

	food(state) {
		return state.food
	},

	dish(state) {
		return state.dish
	}
}

export default {
    state,
    mutations,
    actions,
    getters
};