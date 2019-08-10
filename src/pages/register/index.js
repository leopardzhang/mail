import {
	mapState,
	mapActions
} from 'vuex'

export default {
	data() {
		return {
			registerForm: {
				username: '',
				password: '',
				tel: ''
			}
		}
	},

	methods: {
		...mapActions(['register']),

		handleSubmit() {
			this.register(this.registerForm)
		}
	}
}