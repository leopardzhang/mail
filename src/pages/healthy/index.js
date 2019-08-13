import AppChoser from '@/components/AppChoser/index.vue'
import AppHeader from '@/components/AppHeader/index.vue'
import { Toast } from 'mint-ui'

import {
	mapGetters,
	mapActions
} from 'vuex'

export default {
	components: {
		AppChoser,
		AppHeader
	},

	data() {
		return {
			name: '健康情况',
			itemList: [
				{
					name: '视力',
					key: 'vision',
					options: [
						{
							id: 0,
							name: '良好'
						}, {
							id: 1,
							name: '不良'
						}
					],
					current: 0
				}, {
					name: '听力',
					key: 'hearing',
					options: [
						{
							id: 0,
							name: '良好'
						}, {
							id: 1,
							name: '不良'
						}
					],
					current: 0
				}, {
					name: '社保情况',
					key: 'socialsecurity',
					options: [
						{
							id: 0,
							name: '是'
						}, {
							id: 1,
							name: '否'
						}
					],
					current: 0
				}, {
					name: '保险',
					key: 'insurance',
					options: [
						{
							id: 0,
							name: '是'
						}, {
							id: 1,
							name: '否'
						}
					],
					current: 0
				}, {
					name: '有传染病',
					key: 'contagion',
					options: [
						{
							id: 0,
							name: '是'
						}, {
							id: 1,
							name: '否'
						}
					],
					current: 0
				}, {
					name: '恐惧症',
					key: 'phobia',
					options: [
						{
							id: 0,
							name: '是'
						}, {
							id: 1,
							name: '否'
						}
					],
					current: 0
				}
			],
			loading: false
		}
	},

	computed: {
		...mapGetters([
			'currentFriend',
			'userInfo'
		])
	},

	mounted() {
		this.$nextTick(() => {
			
		})
	},

	methods: {
		...mapActions(['setHealthy']),

		handleChose(data) {
			const {
				index,
				itemIndex
			} = data;

			this.itemList[itemIndex].current = index;
		},

		save() {
			this.loading = true;

			const list = this.itemList;
			const temp = {};

			for (const index in list) {
				temp[list[index].key] = list[index].options[list[index].current].name
			}

			const params = Object.assign({}, temp, {
				id: this.currentFriend.id,
				code: this.userInfo.code
			})

			this.setHealthy(params).then(() => {
				setTimeout(() => {
					this.loading = false;
					Toast({
						message: '保存成功'
					})
				}, 1000)
			}).catch(() => {
				this.loading = false;
				Toast({
					message: '保存失败请重试'
				})
			})
		}
	}
}


