import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

function removeID(data, key) {
	let arr = [];
	for (const item of data) {
		arr.push(item[key]);
	}

	return arr;
}

const state = {
	hobbyInfo: {
		flavor: ['酸', '甜', '苦', '辣', '咸', '酸甜', '酸辣'],
		food: ['米饭', '馒头', '打卤面', '烧饼', '饺子', '火锅'],
		dish: ['鱼香肉丝', '京酱肉丝', '锅包肉', '豆角']
	}
}

const SET_HOBBY_INFO = 'SET_HOBBY_INFO' //设置喜好默认列表

const mutations = {
	[SET_HOBBY_INFO](state, mutation) {
		state.hobbyInfo = mutation.payload
	}
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
			}
		})

		if (res.obj.code == ERR_OK) {
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

		console.log(res.obj);

		const {
			dishList, //默认菜肴列表
			flavorList, //默认口味列表
			foodList //默认主食列表
		} = res.obj;

		commit({
			type: SET_HOBBY_INFO,
			payload: {
				flavor: removeID(flavorList, 'flavor'),
				food: removeID(foodList, 'food'),
				dish: removeID(dishList, 'dish')
			}
		})
	}
}

const getters = {
	flavor(state) {
		return state.hobbyInfo.flavor
	},

	food(state) {
		return state.hobbyInfo.food
	},

	dish(state) {
		return state.hobbyInfo.dish
	}
}

export default {
	state,
	mutations,
	actions,
	getters
};