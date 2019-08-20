import { mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			info_ctrl: [
				{
					name: '基本信息',
					to: ''
				}, {
					name: '注意事项',
					to: 'attention'
				}, {
					name: '健康情况',
					to: 'healthy'
				}, {
					name: '个人喜好',
					to: 'hobby'
				}, {
					name: '关系网',
					to: ''
				}, {
					name: '如何找他办事',
					to: 'findHim'
				}, {
					name: '备忘录',
					to: 'memorandum'
				}
			]
		}
	},

	computed: {
		...mapGetters(['currentFriend'])
	},

	methods: {
		jumpNext(to) {
			this.$router.push({name: to})
		}
	},
}