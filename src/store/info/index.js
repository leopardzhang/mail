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
		flavor: [],
		hateflavor: [],
		food: [],
		dish: [],
		car: []
	},

	hobbyInfoChecked: {
		flavor: [],
		hateflavor: [],
		food: [],
		dish: [],
		car: []
	},

	healthyInfo: {},
	preservation: {}
}

const SET_HOBBY_INFO = 'SET_HOBBY_INFO' //设置喜好默认列表
const SET_HOBBY_INFO_CHECKED = 'SET_HOBBY_INFO_CHECKED' //设置喜好已选列表
const SET_HEALTHY_INFO = 'SET_HEALTHY_INFO' //设置健康情况
const SET_PRESERVATION = 'SET_PRESERVATION' //设置养生情况（个人喜好下面的radio）

const mutations = {
	[SET_HOBBY_INFO](state, mutation) {
		state.hobbyInfo = mutation.payload
	},

	[SET_HEALTHY_INFO](state, mutation) {
		state.healthyInfo = mutation.payload
	},

	[SET_PRESERVATION](state, mutation) {
		state.preservation = mutation.payload
	},

	[SET_HOBBY_INFO_CHECKED](state, mutation) {
		state.hobbyInfoChecked = mutation.payload
	}
}

const actions = {

	async getAllInfo({
		commit,
		dispatch
	}, params) {

		const res = await dispatch('$apiCall', {
			config: $apiConf.GET_ALL_INFO,
			params: {
				results: params
			}
		});

		const {
			hearing, //听力
			vision, //视力
			contagion, //传染病
			insurance, //保险
			socialsecurity, //社保
			phobia, //恐惧症
			smoke, //吸烟
			tea, //喝茶
			alcohol //饮酒
		} = res.obj.directory[0]

		commit({
			type: SET_HEALTHY_INFO,
			payload: {
				hearing, //听力
				vision, //视力
				contagion, //传染病
				insurance, //保险
				socialsecurity, //社保
				phobia //恐惧症
			}
		})

		commit({
			type: SET_PRESERVATION,
			payload: {
				smoke,
				tea,
				alcohol
			}
		})
	},

	/**
	 * 设置好友健康状况
	 * @param {*} param0 
	 * @param {*} params 
	 */
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

		if (res.success) {
			return 0;
		} else {
			throw Error('设置失败请重试');
		}
	},

	/**
	 * 获取好友喜好
	 * @param {*} param0 
	 * @param {*} params 
	 */
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

		const {
			directoryflavorrelationshipList, //已选口味
			directorydishrelationshipList, //已选菜品
			directoryfoodrelationshipList, //已选主食
			dishList, //默认菜肴列表
			flavorList, //默认口味列表
			foodList //默认主食列表
		} = res.obj;

		const {
			carList,
			directorycarrelationshipList
		} = res.obj.directory;

		const [
			flavor,
			hateflavor,
			food,
			dish,
			car
		] = [
			[],
			[],
			[],
			[],
			[]
		]

		for (const i in directoryflavorrelationshipList) {
			for (const j in flavorList) {
				if (directoryflavorrelationshipList[i].flavorid == flavorList[j].id) {
					if (directoryflavorrelationshipList[i].state) {
						flavor.push(flavorList[j].flavor)
					} else {
						hateflavor.push(flavorList[j].flavor)
					}
				}
			}
		}

		for (const i in directoryfoodrelationshipList) {
			for (const j in foodList) {
				if (directoryfoodrelationshipList[i].foodid == foodList[j].id) {
					food.push(foodList[j].food)
				}
			}
		}

		for (const i in directorydishrelationshipList) {
			for (const j in dishList) {
				if (directorydishrelationshipList[i].dishid == dishList[j].id) {
					dish.push(dishList[j].dish)
				}
			}
		}

		for (const i in directorycarrelationshipList) {
			for (const j in carList) {
				if (directorycarrelationshipList[i].carid == carList[j].id) {
					car.push(carList[j].name)
				}
			}
		}

		commit({
			type: SET_HOBBY_INFO,
			payload: {
				flavor: removeID(flavorList, 'flavor'),
				food: removeID(foodList, 'food'),
				dish: removeID(dishList, 'dish'),
				hateflavor: removeID(flavorList, 'flavor'),
				car: removeID(carList, 'name')
			}
		})

		commit({
			type: SET_HOBBY_INFO_CHECKED,
			payload: {
				flavor,
				hateflavor,
				food,
				dish,
				car
			}
		})
	},

	/**
	 * 修改个人喜好
	 * @param {*} param0 
	 * @param {*} params 
	 */
	async setHobbyInfo({
		commit,
		dispatch,
		state
	}, params) {
		const res = await dispatch('$apiCall', {
			config: $apiConf.UPDATE_HOBBY,
			params: {
				results: params
			}
		});

		if (res.success) {
			return 0;
		} else {
			throw Error('设置失败请重试');
		}
	}
}

const getters = {
	flavor(state) {
		return state.hobbyInfo.flavor
	},

	hateflavor(state) {
		return state.hobbyInfo.hateflavor
	},

	food(state) {
		return state.hobbyInfo.food
	},

	dish(state) {
		return state.hobbyInfo.dish
	},

	car() {
		return state.hobbyInfo.car
	},

	healthyInfo(state) {
		return state.healthyInfo
	},

	preservation(state) {
		return state.preservation
	},

	hobbyInfoChecked(state) {
		return state.hobbyInfoChecked
	}
}

export default {
	state,
	mutations,
	actions,
	getters
};