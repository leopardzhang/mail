import AppHeader from '@/components/AppHeader/index.vue'
import {
	mapActions,
	mapGetters
} from 'vuex'

export default {
	components: {
		AppHeader
	},

	data() {
		return {
			
		}
	},

	computed: {
		...mapGetters([
			'currentFriend',
			'userInfo'
		])
	},

	beforeMount() {
		this.getCommonFriends({
			code: this.userInfo.code,
			directoryid: this.currentFriend.id
		})
	},

	methods: {
		...mapActions([
			'getCommonFriends'
		])
	}
}