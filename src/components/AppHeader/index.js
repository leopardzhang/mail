export default {
	name: 'AppHeader',
	props: {
		name: String
	},

	methods: {
		handleSave() {
			this.$emit('handleSave');
		}
	},
}