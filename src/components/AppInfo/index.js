export default {
	name: 'AppInfo',
	props: {
		name: String,
		value: Number
	},

	data() {
		return {
			loan: 0
		}
	},

	beforeMount() {
		this.loan = this.value
	},

	methods: {
		updateMessage() {
			this.$emit('updateMessage', this.loan)
		}
	},
}