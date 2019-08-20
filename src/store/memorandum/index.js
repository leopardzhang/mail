import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	memorandum: []
}

const GET_FRIEND_MEMORANDUM = 'GET_FRIEND_MEMORANDUM'

const mutations = {
	[GET_FRIEND_MEMORANDUM] (state, mutation) {
		state.memorandum = mutation.payload
	}
}

const actions = {
	async getFriendMemorandum ({
		state,
		commit,
		dispatch
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.GET_FRIEND_MEMORANDUM,
			params: {
				results: params
			}
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
}