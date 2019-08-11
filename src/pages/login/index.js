import {
	mapState,
	mapActions
} from 'vuex'
import { Toast } from 'mint-ui'

export default {
	data() {
		return {
			loginForm: {
				username: 'zjnn',
				password: 'zjnn'
			}
		}
	},

	methods: {
		...mapActions(['login']),

		handleSubmit() {
			this.login(this.loginForm).then((res) => {
				this.$router.push({
					name: 'index'
				})
			}).catch((err) => {
				Toast({
					message: '用户名或密码错误'
				  });
			})
		}
	}
}