export default {

	/**
	 * 获取基本喜好列表
	 */
	GET_HOBBY_LIST: {
		name: 'GET_HOBBY_LIST',

		proxy: {
			url: 'cxBefondofController.do?queryBefondof',
			method: 'GET'
		}
	},

	/**
	 * 获取好友状况（包括健康，经济等）
	 */
	GET_ALL_INFO: {
		name: 'GET_ALL_INFO',

		proxy: {
			url: 'cxDirectoryCusController.do?queryDirectory',
			method: 'GET'
		}
	},

	/**
	 * 修改基本信息
	 */
	UPDATE_BASE_INFO: {
		name: 'UPDATE_BASE_INFO',

		proxy: {
			url: 'cxDirectoryCusController.do?updateDirectory',
			method: 'GET'
		}
	},

	/**
	 * 修改健康信息
	 */
	UPDATE_HEALTHY: {
        name: 'UPDATE_HEALTHY',

        proxy: {
            url: 'cxDirectoryCusController.do?updateHealth',
            method: 'GET'
        }
	},

	/**
	 * 修改注意事项
	 */
	UPDATE_ATTENTION: {
        name: 'UPDATE_ATTENTION',

        proxy: {
            url: 'cxDirectoryCusController.do?updateTakecare',
            method: 'GET'
        }
	},

	/**
	 * 修改经济情况
	 */
	UPDATE_ECONOMY: {
        name: 'UPDATE_ECONOMY',

        proxy: {
            url: 'cxDirectoryCusController.do?updateEconomics',
            method: 'GET'
        }
	},

	/**
	 * 修改个人喜好
	 */
	UPDATE_HOBBY: {
        name: 'UPDATE_HOBBY',

        proxy: {
            url: 'cxBefondofController.do?toUpdateBefondof',
            method: 'GET'
        }
	},

	/**
	 * 删除好友
	 */
	REMOVE_FRIEND: {
        name: 'REMOVE_FRIEND',

        proxy: {
            url: 'cxDirectoryCusController.do?deleteDirectory',
            method: 'GET'
        }
	},
}