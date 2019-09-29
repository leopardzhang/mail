export default {

	/**
	 * 获取共同好友
	 */
	GET_COMMON_FRIENDS: {
		name: 'GET_COMMON_FRIENDS',

		proxy: {
			url: 'cxCommonfriendsCusController.do?queryCommonfriendsList',
			method: 'GET'
		}
	},
	/**
	 * 添加好友
	 */
	ADD_FRIEND: {
		name: 'ADD_FRIEND',

		proxy: {
			url: 'cxDirectoryCusController.do?addDirectory',
			method: 'GET'
		}
	}
}