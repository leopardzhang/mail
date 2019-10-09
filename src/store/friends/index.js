import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	commonFriends: []
}

const GET_COMMON_FRIDNES = 'GET_COMMON_FRIDNES'
const ADD_FRIEND = 'ADD_FRIEND'

const mutations = {
	[GET_COMMON_FRIDNES](state, mutation) {
		state.commonFriends = mutation.payload
	},

	[ADD_FRIEND](state, mutation) {
		state.ADD_FRIEND = mutation.payload
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
		})

		console.log(res);
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