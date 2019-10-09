import _ from 'lodash'
import $apiConf from '@/config'
import {
	ERR_OK
} from '@/common/code'

const state = {
	userInfo: null,
	friendsList: null,
	currentFriend: {},
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
const SET_FRIENDS_LOAN = 'SET_FRIENDS_LOAN'


const mutations = {
	[SET_USERINFO](state, mutation) {
		state.userInfo = Object.assign({}, mutation.payload)
	},

	[SET_FRIENDS_LIST](state, mutation) {
		state.friendsList = mutation.payload
	},

	[SET_CURRENT_FRIEND](state, mutation) {
		state.currentFriend = mutation.payload
	},

	[SET_FRIENDS_LOAN](state, mutation) {
		state.currentFriend.loan = mutation.payload
	}
}

const actions = {
	/**
	 * 登录
	 */
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

		if (res.success == ERR_OK) {
			commit({
				type: SET_USERINFO,
				payload: res.obj.user
			})

			commit({
				type: SET_FRIENDS_LIST,
				payload: res.obj.directoryList
			})

			localStorage.setItem('userInfo', JSON.stringify(res.obj.user));
			localStorage.setItem('friendsList', JSON.stringify(res.obj.directoryList));

		} else {
			throw Error('用户名或密码错误');
		}
	},

	/**
	 * 设置当前选中的朋友
	 * @param {*} param0 
	 * @param {*} id 
	 */
	async setCurrentFriend({
		commit,
		dispatch,
		state
	}, id) {
		const friendsList = state.friendsList ?
			state.friendsList : JSON.parse(localStorage.getItem('friendsList'));
		const index = _.findIndex(friendsList, {
			'id': id
		});
		const allData = friendsList[index];

		let temp = []

		for (const item of state.healthyKey) {
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
	},

	async setFriendLoan({
		commit
	}, val) {
		commit({
			type: SET_FRIENDS_LOAN,
			payload: val
		})
	},

	/**
	 * 手动刷新好友列表
	 * @param {*} param0 
	 */
	async refreshFriendList({
		commit,
		state
	}) {
		const friendsList = JSON.parse(localStorage.getItem('friendsList'));

		commit({
			type: SET_FRIENDS_LIST,
			payload: friendsList
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
	},

	driveAble(state) { //驾驶能力
		return state.currentFriend.drivingage || '无'
	},

	driving(state) {
		return state.currentFriend.driving
	},

	// cars(state) {
	// 	const cars = state.currentFriend.car;
	// 	let temp = cars.substr(1);
	// 	temp = temp.substr(0, temp.length - 1);
	// 	temp = temp.replace(/"/g, '');
	// 	const arr = temp.split(',');

	// 	return arr;
	// }
}

export default {
	state,
	mutations,
	actions,
	getters
};