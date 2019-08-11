import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	userInfo: {},
	friendsList: []
}
const SET_USERINFO = 'SET_USERINFO'
const SET_FRIENDS_LIST = 'SET_FRIENDS_LIST'


const mutations = {
	[SET_USERINFO] (state, mutation) {
		state.userInfo = Object.assign({}, mutation.payload)
	},

	[SET_FRIENDS_LIST] (state, mutation) {
		state.friendsList = mutation.payload
	}
}

const actions = {
	async login({
		commit,
        dispatch,
        state
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.LOGIN,
			params: {
				results: params
			}
		});

		if(res.obj.code === ERR_OK) {
			commit({
				type: SET_USERINFO,
				payload: res.obj.user
			})
	
			commit({
				type: SET_FRIENDS_LIST,
				payload: res.obj.directoryList
			})

		} else {
			throw Error('用户名或密码错误');
		}

		
	}
}

const getters = {
	friendsList(state) {
		return state.friendsList;
	}
}

export default {
    state,
    mutations,
    actions,
    getters
};