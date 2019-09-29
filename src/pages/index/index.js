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

	mounted() {
		
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