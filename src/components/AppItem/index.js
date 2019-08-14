export default {
	name: 'AppItem',
	props: {
		list: Object,
		index: Number
	},

	methods: {
		showPopup() {
			this.$emit('showPopup', this.index);
		}
	},
}