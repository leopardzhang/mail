import {
	mapState,
	mapActions
} from 'vuex'
import { Toast } from 'mint-ui'


export default {
	data() {
		return {
			loginForm: {
				username: '',
				password: ''
			}
		}
	},

	beforeCreate() {
		const userInfo = localStorage.getItem('userInfo');

		if(userInfo) {
			this.$router.push({
				name: 'index'
			});
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