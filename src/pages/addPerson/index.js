import {
	mapGetters,
	mapActions
} from 'vuex'
import {
	Toast
} from 'mint-ui'
import AppHeader from '@/components/AppHeader/index.vue'

export default {
	components: {
		AppHeader
	},

	data() {
		return {
			pageName: '添加好友',
			name: '',
			tel: ''
		}
	},

	computed: {
		...mapGetters([
			'userInfo'
		])
	},

	methods: {
		...mapActions([
			'addFriend',
			'refreshFriendList'
		]),

		save() {
			const {
				name,
				tel
			} = this;

			const params = {
				name,
				tel,
				code: this.userInfo.code
			}

			if (/%d/g.test(tel)) {
				Toast({
					message: '电话号格式不正确'
				})
			} else if (name != '' && tel != '') {
				this.addFriend(params).then((res) => {
					Toast({
						message: '保存成功'
					})
					this.refreshFriendList();
					setTimeout(() => {
						this.name = '';
						this.tel = '';
						this.$router.back(-1)
					}, 800)
				}).catch((err) => {
					Toast({
						message: '保存失败，请重试'
					})
				});
			} else {
				Toast({
					message: '姓名和电话不能为空'
				})
			}
		}
	}
}