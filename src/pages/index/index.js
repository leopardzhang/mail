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
		this.getData({
			a: 12,
			b: 5
		})
	},

	methods: {
		...mapActions(['getData']),

		addPerson() {
			this.$router.push({
				name: 'addPerson'
			});
		}
	},
};