import {
	mapGetters,
	mapActions
} from 'vuex'

export default {
	data() {
		return {
			msg: ''
		}
	},

	computed: {
		...mapGetters(['friendsList'])
	},

	beforeRouteEnter (to, from, next) {
		next(vm => {
			console.log(vm.friendsList);
		})
	},

	methods: {
		...mapActions(['setCurrentFriend']),

		addPerson () {
			this.$router.push({
				name: 'addPerson'
			});
		},

		handleFriendItemClick (id) {

			this.setCurrentFriend(id).then(() => {
				this.$router.push({
					name: 'personDetail'
				})
			})
		}
	}
};