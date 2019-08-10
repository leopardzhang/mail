import {
	mapState,
	mapActions
} from 'vuex'

export default {
	data() {
		return {
			msg: 'hello啊'
		}
	},

	computed: {
		...mapState(['test'])
	},

	mounted() {

	},

	methods: {
		addPerson() {
			this.$router.push({
				name: 'personDetail'
			});
		}
	}
};