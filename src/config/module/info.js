export default {
	HEALTHY: {
        name: 'HEALTHY',

        proxy: {
            url: 'cxDirectoryCusController.do?updateHealth',
            method: 'GET'
        }
	},

	GET_HOBBY_LIST: {
		name: 'GET_HOBBY_LIST',

		proxy: {
			url: 'cxBefondofController.do?queryBefondof',
			method: 'GET'
		}
	}
}