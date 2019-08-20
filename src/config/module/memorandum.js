export default {
	GET_FRIEND_MEMORANDUM: {
		name: 'GET_FRIEND_MEMORANDUM',

		proxy: {
			url: 'cxRecordCusController.do?queryRecordList',
			method: 'GET'
		}
	}
}