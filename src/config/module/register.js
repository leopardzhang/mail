export default {
	REGISTER: {
        name: 'REGISTER',

        proxy: {
            url: 'cxUsersCusController.do?addUser',
            method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
        }
	}
}