import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	commonFriends: [],
	info_ctrl: []
}

const GET_COMMON_FRIDNES = 'GET_COMMON_FRIDNES'
const ADD_FRIEND = 'ADD_FRIEND'
const SET_INFO_STATE = 'SET_INFO_STATE'

const mutations = {
	[GET_COMMON_FRIDNES](state, mutation) {
		state.commonFriends = mutation.payload
	},

	[ADD_FRIEND](state, mutation) {
		state.ADD_FRIEND = mutation.payload
	},

	[SET_INFO_STATE](state, mutation) {
		state.info_ctrl = mutation.payload
	}
}

const actions = {
	async getCommonFriends({
		commit,
		dispatch
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.GET_COMMON_FRIENDS,
			params: {
				results: params
			}
		})

		const commonFriends = res.obj.commonfriendsList

		commit({
			type: GET_COMMON_FRIDNES,
			payload: {}
		});
	},

	/**
	 * 添加好友
	 */
	async addFriend({
		commit,
		dispatch,
		state
	}, params) {

		const res = await dispatch('$apiCall', {
			config: $apiConf.ADD_FRIEND,
			params: {
				results: params
			}
		})

		if (res.success == ERR_OK) {
			localStorage.setItem('friendsList', JSON.stringify(res.obj.directoryList));
			return 0;
		} else {
			throw Error('添加失败请重试');
		}
	},

	/**
	 * 获取信息是否填写
	 */
	async getState({
		commit,
		dispatch,
		state
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.GET_STATE,
			params: {
				results: params
			}
		})
		const baseList = [{
			name: '基本信息',
			to: ''
		}, {
			name: '注意事项',
			to: ''
		}, {
			name: '健康情况',
			to: 'healthy'
		}, {
			name: '经济情况',
			to: 'economy'
		}, {
			name: '个人喜好',
			to: 'hobby'
		}, {
			name: '关系网',
			to: ''
		}, {
			name: '如何找他办事',
			to: ''
		}, {
			name: '备忘录',
			to: ''
		}];

		for (let i in res.obj) {
			for (let j in baseList) {
				if (i == baseList[j].name) {
					baseList[j].state = res.obj[i];
				}
			}
		}

		commit({
			type: SET_INFO_STATE,
			payload: baseList
		})
	},

	async setPicture({
		commit,
		dispatch,
		state
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.SET_PICTURE,
			params: {
				results: params
			}
		});

		console.log(res);
	}
}

const getters = {
	info_ctrl(state) {
		return state.info_ctrl
	}
}

export default {
	state,
	mutations,
	actions,
	getters
};
