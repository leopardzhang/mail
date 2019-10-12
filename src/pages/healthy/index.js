import AppChoser from '@/components/AppChoser/index.vue'
import AppHeader from '@/components/AppHeader/index.vue'
import {
	Toast
} from 'mint-ui'

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
			itemList: [{
				name: '视力',
				key: 'vision',
				options: [
					'良好',
					'不良'
				],
				current: 0
			}, {
				name: '听力',
				key: 'hearing',
				options: [
					'良好',
					'不良'
				],
				current: 0
			}, {
				name: '社保情况',
				key: 'socialsecurity',
				options: [
					'是',
					'否'
				],
				current: 0
			}, {
				name: '保险',
				key: 'insurance',
				options: [
					'是',
					'否'
				],
				current: 0
			}, {
				name: '有传染病',
				key: 'contagion',
				options: [
					'是',
					'否'
				],
				current: 0
			}, {
				name: '恐惧症',
				key: 'phobia',
				options: [
					'是',
					'否'
				],
				current: 0
			}],
			loading: false
		}
	},

	computed: {
		...mapGetters([
			'currentFriend',
			'userInfo',
			'healthyInfo'
		])
	},

	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.getAllInfo({
				id: vm.currentFriend.id,
				code: vm.userInfo.code
			}).then(() => {
				for (const i in vm.healthyInfo) {
					for (const j in vm.itemList) {
						if (vm.itemList[j].key == i) {
							vm.itemList[j].current = vm.itemList[j].options.indexOf(vm.healthyInfo[i])
						}
					}
				}
			})
		})
	},

	methods: {
		...mapActions([
			'setHealthy',
			'getAllInfo'
		]),

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
				temp[list[index].key] = list[index].options[list[index].current]
			}

			const params = Object.assign({}, temp, {
				id: this.currentFriend.id,
				code: this.userInfo.code
			})

			this.setHealthy(params).then(() => {
				this.loading = false;
				Toast({
					message: '保存成功'
				})
			}).catch(() => {
				this.loading = false;
				Toast({
					message: '保存失败请重试'
				})
			})
		}
	}
}