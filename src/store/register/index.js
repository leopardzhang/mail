import $apiConf from '@/config'
import ERR_OK from '@/common/code'

const state = {

}

const mutations = {

}

const actions = {
	async register({
		commit,
        dispatch,
        state
	}, params) {
		const {
			tel,
			username,
			password
		} = params

		if(!/^1[3456789]\d{9}$/.test(tel)) {
			return {
				code: 1,
				msg: '电话号码格式不正确'
			};
		} else if (username === '' || password === '') {
			return {
				code: 1,
				msg: '用户名和密码不能为空'
			};
		} else {
			const res = await dispatch('$apiCall', {
				config: $apiConf.REGISTER,
				params: {
					results: params
				}
			});
	
			if(res.obj.code !== ERR_OK) {
				return {
					code: 0,
					msg: res.msg
				};
			}
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