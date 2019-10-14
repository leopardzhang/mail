import AppChoser from '@/components/AppChoser/index.vue'
import AppHeader from '@/components/AppHeader/index.vue'
import AppInfo from '@/components/AppInfo/index.vue'
import AppItem from '@/components/AppItem/index.vue'

import {
	Toast
} from 'mint-ui'

import {
	mapGetters,
	mapActions
} from 'vuex';

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
				value: ''
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

			wagenList: [{
				name: '车辆',
				key: 'car',
				baseList: [],
				inputList: []
			}],

			popupVisible: false,

			popPosition: 'right',

			options: [],

			value: [],
			other: '',
			currentIndex: null, //弹出框绑定的索引
			loading: false //loading状态
		}
	},

	computed: {
		...mapGetters([
			'currentFriend',
			'userInfo',
			'car',
			'driving',
			'driveAble',
			'hobbyInfoChecked'
		])
	},

	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.loan.value = vm.currentFriend.loan || 0;

			const curr = vm.divingage[0].options.indexOf(vm.driveAble)

			vm.divingage[0].current = curr;

			vm.getHobbyList({
				id: vm.currentFriend.id,
				code: vm.userInfo.code
			}).then(() => {
				vm.wagenList[0].baseList = vm.hobbyInfoChecked.car;
			})
		})
	},

	methods: {
		...mapActions([
			'setFriendEconomy',
			'getHobbyList'
		]),

		changeLoanValue(val) {
			this.loan.value = parseInt(val);
		},

		handleChose(data) {
			const {
				index,
				itemIndex
			} = data;

			this.divingage[itemIndex].current = index;
		},

		showPopup(i) {
			this.currentIndex = i;

			const {
				currentIndex,
				wagenList
			} = this;

			this.value = this.wagenList[currentIndex].baseList
			this.other = this.wagenList[currentIndex].inputList.join(' ');

			this.options = this[wagenList[currentIndex].key]
			this.popupVisible = true;
		},

		save() {
			const carList = [];

			for (const item of this.wagenList[0].inputList) {
				carList.push(item)
			}
			for (const item of this.wagenList[0].baseList) {
				carList.push(item)
			}

			const {
				id,
				code,
				drivingage,
				driving,
				loan,
				car
			} = {
				id: this.currentFriend.id,
				code: this.userInfo.code,
				drivingage: this.divingage[0].current == 0 ? '无' : this.divingage[0].options[this.divingage[0].current],
				driving: this.divingage[0].current == 0 ? '无' : '有',
				loan: this.loan.value,
				car: carList
			}

			this.setFriendEconomy({
				id,
				code,
				drivingage,
				driving,
				loan,
				car
			}).then(() => {
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
		},

		hiddenPopup() {
			const {
				currentIndex,
				wagenList
			} = this;

			this.popupVisible = false;
			this.wagenList[currentIndex].inputList = this.other.split(' ');
			this.wagenList[currentIndex].baseList = [...this.value]
		}
	}
}