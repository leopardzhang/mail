import {
	mapGetters,
	mapActions
} from 'vuex'

export default {
	data() {
		return {
			msg: 'hello啊'
		}
	},

	computed: {
		...mapGetters(['friendsList'])
	},

	mounted() {
		
	},

	methods: {
		addPerson () {
			this.$router.push({
				name: 'personDetail'
			});
		},

		handleFriendItemClick () {
			this.$router.push({
				name: 'personDetail'
			})
		}
	}
};