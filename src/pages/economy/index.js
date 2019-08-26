import AppChoser from '@/components/AppChoser/index.vue'
import AppHeader from '@/components/AppHeader/index.vue'
import AppInfo from '@/components/AppInfo/index.vue'
import AppItem from '@/components/AppItem/index.vue'

export default {
	components: {
		AppChoser,
		AppHeader,
		AppInfo,
		AppItem
	},

	data() {
		return {
			name: '经济情况',
			loan: {
				name: '贷款情况',
				value: 100000
			},

			divingage: [{
				name: '驾驶能力',
				key: 'divingage',
				options: [
					'无',
					'A',
					'B',
					'C'
				],
				current: 0
			}],

			car: [{
				name: '车辆',
				baseList: ['大众', '斯柯达', '奥迪'],
				inputList: ['雷克萨斯', 'wey']
			}]
		}
	},

	mounted() {
		
	},

	methods: {
		handleChose(data) {
			const {
				index,
				itemIndex
			} = data;

			this.divingage[itemIndex].current = index;
		},

		save() {

		}
	},
}