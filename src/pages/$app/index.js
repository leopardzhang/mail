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
			transformName: 'slide-right',
			pageName: '经济情况'
		}
	},

	methods: {
	}
}