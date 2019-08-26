import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	commonFriends: []
}

const GET_COMMON_FRIDNES = 'GET_COMMON_FRIDNES'

const mutations = {
	[GET_COMMON_FRIDNES](state, mutation) {
		state.commonFriends = mutation.payload
	}
}

const actions = {
	async getCommonFriends({
		commit,
		dispatch,
		state
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