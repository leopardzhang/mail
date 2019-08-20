import AppItem from '@/components/AppItem/index.vue'
import AppChoser from '@/components/AppChoser/index.vue'
import AppHeader from '@/components/AppHeader/index.vue'

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
			hobbyList: [
				{
					name: '喜好口味',
					key: 'flavor',
					baseList: ['酸辣', '酸甜'],
					inputList: ['甜', '抹茶']
				},
				{
					name: '讨厌口味',
					key: 'flavor',
					baseList: ['苦', '咸'],
					inputList: []
				},
				{
					name: '喜好主食',
					key: 'food',
					baseList: ['米饭', '打卤面', '饺子'],
					inputList: ['意大利面', '馄饨']
				},
				{
					name: '喜好菜肴',
					key: 'dish',
					baseList: ['鱼香肉丝', '可乐鸡翅', '铁板烧'],
					inputList: ['黄焖鸡', '锅包肉']
				}
			],

			orgOtherHobby: [
				{
					name: '吸烟情况',
					key: 'smoke',
					options: [
						{
							id: 0,
							name: '吸烟'
						},{
							id: 1,
							name: '不吸烟'
						},{
							id: 2,
							name: '已戒烟'
						}
					],
					current: 1
				},
				{
					name: '饮酒情况',
					key: 'alcohol',
					options: [
						{
							id: 0,
							name: '饮酒'
						},{
							id: 1,
							name: '不饮酒'
						},{
							id: 2,
							name: '已戒酒'
						}
					],
					current: 1
				},
				{
					name: '饮茶情况',
					key: 'tea',
					options: [
						{
							id: 0,
							name: '经常'
						},{
							id: 1,
							name: '偶尔'
						},{
							id: 2,
							name: '从不'
						}
					],
					current: 1
				}
			],

			otherHobby: {
				smoke: '已戒烟',
				wine: '不饮酒',
				tea: '经常'
			},

			popupVisible: false,

			popPosition: 'right',

			options: [
				{
					label: '被禁用',
					value: '值F'
				},
				{
					label: '选中禁用',
					value: '选中禁用的值'
				},
				{
					label: '选项A',
					value: '值A'
				},
				{
					label: '选项B',
					value: '值B'
				}
			],

			value: [],
			other: '',
			currentIndex: null	//弹出框绑定的索引
		}
	},

	computed: {
		...mapGetters([
			'currentFriend',
			'userInfo',
			'flavor',
			'food',
			'dish'
		])
	},

	beforeMount() {
		this.getHobbyList({
			code: this.userInfo.code,
			directoryid: this.currentFriend.id
		}).then(() => {
			console.log(this.flavor);
		});
	},

	methods: {
		...mapActions(['getHobbyList']),

		save () {

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