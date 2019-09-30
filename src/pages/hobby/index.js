import AppItem from '@/components/AppItem/index.vue'
import AppChoser from '@/components/AppChoser/index.vue'
import AppHeader from '@/components/AppHeader/index.vue'
import _ from 'lodash'
import {
	Toast
} from 'mint-ui'

import {
	mapActions,
	mapGetters
} from 'vuex'

export default {
	components: {
		AppItem,
		AppChoser,
		AppHeader
	},

	data() {
		return {
			name: '个人喜好',
			hobbyList: [{
					name: '喜好口味',
					key: 'flavor',
					baseList: [],
					inputList: []
				},
				{
					name: '讨厌口味',
					key: 'hateflavor',
					baseList: [],
					inputList: []
				},
				{
					name: '喜好主食',
					key: 'food',
					baseList: [],
					inputList: []
				},
				{
					name: '喜好菜肴',
					key: 'dish',
					baseList: [],
					inputList: []
				}
			],

			orgOtherHobby: [{
					name: '吸烟情况',
					key: 'smoke',
					options: [
						'吸烟',
						'不吸烟',
						'已戒烟'
					],
					current: 0
				},
				{
					name: '饮酒情况',
					key: 'alcohol',
					options: [
						'饮酒',
						'不饮酒',
						'已戒酒'
					],
					current: 0
				},
				{
					name: '饮茶情况',
					key: 'tea',
					options: [
						'经常',
						'偶尔',
						'从不'
					],
					current: 0
				}
			],

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
			'flavor',
			'hateflavor',
			'food',
			'dish',
			'preservation',
			'hobbyInfoChecked'
		])
	},

	beforeRouteEnter(to, from, next) {
		next(vm => {
			const _this = vm;

			_this.getHobbyList({
				code: _this.userInfo.code,
				directoryid: _this.currentFriend.id
			}).then(() => {
				_this.hobbyList[0].baseList = _this.hobbyInfoChecked.flavor;
				_this.hobbyList[1].baseList = _this.hobbyInfoChecked.hateflavor;
				_this.hobbyList[2].baseList = _this.hobbyInfoChecked.food;
				_this.hobbyList[3].baseList = _this.hobbyInfoChecked.dish;
			});

			_this.getAllInfo({
				id: _this.currentFriend.id,
				code: _this.userInfo.code
			}).then(() => {
				for (const i in _this.preservation) {
					for (const j in _this.orgOtherHobby) {
						if (_this.orgOtherHobby[j].key == i) {
							_this.orgOtherHobby[j].current =
								_this.orgOtherHobby[j].options.indexOf(_this.preservation[i])
						}
					}
				}
			})
		})

	},

	methods: {
		...mapActions([
			'getHobbyList',
			'getAllInfo',
			'setHobbyInfo'
		]),

		save() {
			const params = {};

			for (const i in this.hobbyList) {
				params[this.hobbyList[i].key] =
					_.concat(this.hobbyList[i].baseList, this.hobbyList[i].inputList)
			}

			for (const item of this.orgOtherHobby) {
				params[item.key] = item.options[item.current]
			}

			Object.assign(params, {
				hobbyflavor: params.flavor
			}, {
				directoryid: this.currentFriend.id,
				code: this.userInfo.code
			});

			this.setHobbyInfo(params).then(() => {
				this.loading = false;
				Toast({
					message: '保存成功'
				})
			}).catch((err) => {
				console.log(err);
				this.loading = false;
				Toast({
					message: '保存失败请重试'
				})
			})
		},

		handleChose(data) {
			const {
				index,
				itemIndex
			} = data;

			this.orgOtherHobby[itemIndex].current = index;
		},

		showPopup(i) {
			this.currentIndex = i;

			const {
				currentIndex,
				hobbyList
			} = this;

			this.value = this.hobbyList[currentIndex].baseList
			this.other = this.hobbyList[currentIndex].inputList.join(' ');

			this.options = this[hobbyList[currentIndex].key]
			this.popupVisible = true;
		},

		hiddenPopup() {
			const {
				currentIndex,
				hobbyList
			} = this;

			this.popupVisible = false;
			this.hobbyList[currentIndex].inputList = this.other.split(' ');
			this.hobbyList[currentIndex].baseList = [...this.value]
		}
	}
}