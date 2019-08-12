import AppHeader from '@/components/AppHeader/index.vue'
import AppItem from '@/components/AppItem/index.vue'
import AppChoser from '@/components/AppChoser/index.vue'
import AppInfo from '@/components/AppInfo/index.vue'

export default {
	name: "app",
	components: {
		AppHeader,
		AppItem,
		AppChoser,
		AppInfo
	},
	data() {
		return {
			routerList: [{
				name: '提醒',
				to: '/tixing'
			}, {
				name: '联系人',
				to: '/index'
			}, {
				name: '收藏',
				to: '/act'
			}],
			routerIndex: 1,
			transitionName: "slide-right" //初始过渡动画方向
		}
	},

	methods: {
		changeRouterIndex(index) {
			this.routerIndex = index
		}
	}
}