import _ from 'lodash'
import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	userInfo: null,
	friendsList: null,
	currentFriend: {
		alcohol: null,
		appointment: null,
		bloodtype: "A",
		car: null,
		constellation: "射手座",
		contagion: null,
		crime: "无",
		driving: null,
		drivingage: null,
		education: "大专",
		fertility: "未生育",
		hearing: null,
		id: "7ac90e8b-bb61-11e9-8737-fa163eec8269",
		insurance: null,
		loan: null,
		marriage: "未婚",
		name: "张加楠",
		other: null,
		phobia: null,
		politics: "群众",
		religion: "无",
		smoke: null,
		socialsecurity: null,
		tea: null,
		tel: "18348544430",
		vision: null,
		zodiac: "兔",
		healthy: [
			{
				name: "vision",
				value: null
			}, {
				name: "hearing",
				value: null
			}, {
				name: "socialsecurity",
				value: null
			}, {
				name: "insurance",
				value: null
			}, {
				name: "contagion",
				value: null
			}, {
				name: "phobia",
				value: null
			}
		]
	},
	healthyKey: [
		'vision',
		'hearing',
		'socialsecurity',
		'insurance',
		'contagion',
		'phobia'
	]
}

const SET_USERINFO = 'SET_USERINFO'
const SET_FRIENDS_LIST = 'SET_FRIENDS_LIST'
const SET_CURRENT_FRIEND = 'SET_CURRENT_FRIEND'


const mutations = {
	[SET_USERINFO] (state, mutation) {
		state.userInfo = Object.assign({}, mutation.payload)
	},

	[SET_FRIENDS_LIST] (state, mutation) {
		state.friendsList = mutation.payload
	},
	
	[SET_CURRENT_FRIEND] (state, mutation) {
		state.currentFriend = mutation.payload
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
		localStorage.setItem('userInfo', JSON.stringify(res.obj.user));
		localStorage.setItem('friendsList', JSON.stringify(res.obj.directoryList));

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

		
	},

	async setCurrentFriend ({
		commit,
        dispatch,
        state
	}, id) {
		const friendsList = state.friendsList ? 
		state.friendsList : JSON.parse(localStorage.getItem('friendsList'));
		const index = _.findIndex(friendsList, {'id': id});
		const allData = friendsList[index];

		let temp = []

		for(const item of state.healthyKey) {
			temp.push({
				name: item,
				value: allData[item]
			})
		}

		allData.healthy = temp;
		
		commit({
			type: SET_CURRENT_FRIEND,
			payload: Object.assign({}, allData)
		})
	}
}

const getters = {
	userInfo(state) {
		const userInfo = state.userInfo;
		return userInfo ? userInfo : JSON.parse(localStorage.getItem('userInfo'))
	},

	friendsList(state) {
		const friendsList = state.friendsList;
		return friendsList ? friendsList : JSON.parse(localStorage.getItem('friendsList'))
	},

	currentFriend(state) {
		return state.currentFriend
	}
}

export default {
    state,
    mutations,
    actions,
    getters
};