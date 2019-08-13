export default {
	name: 'AppChoser',
	props: {
		name: String,
		options: Array,
		current: Number,
		itemIndex: Number
	},

	methods: {
		handleChose(index) {
			this.$emit('chose', {
				index,
				itemIndex: this.itemIndex
			});
		}
	},
}