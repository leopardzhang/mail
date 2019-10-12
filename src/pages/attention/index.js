import AppHeader from '@/components/AppHeader/index.vue'
import {
	mapActions,
	mapGetters
} from 'vuex'

export default {

	beforeRouteEnter (to, from, next) {
		next( vm => {
			vm.getCommonFriends({
				code: this.userInfo.code,
				directoryid: this.currentFriend.id
			})
		})
	},

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

	methods: {
		...mapActions([
			'getCommonFriends'
		])
	}
}