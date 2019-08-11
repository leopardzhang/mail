import {
	mapState,
	mapActions
} from 'vuex'
import { ERR_OK } from '@/common/code' 
import { Toast } from 'mint-ui'

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
			this.register(this.registerForm).then((res) => {
				if(res.code === ERR_OK) {
					Toast({
						message: '注册成功'
					});
					
					setTimeout(() => {
						this.$router.push({name: 'login'})
					}, 2000);
				} else {
					Toast({
						message: res.msg
					});
				}
			});
		}
	}
}