import AppHeader from '@/components/AppHeader/index.vue'
import {
	mapActions,
	mapGetters
} from 'vuex'

export default {
	components: {
		AppHeader
	},

	data() {
		return {
			demoEvents: [{
				date: '2019/08/20',
				title: '吃喝拉撒',
				time: '08:30'
			}, {
				date: '2019/08/10',
				title: '吃喝嫖赌',
				time: '08:30'
			}, {
				date: '2019/08/19',
				title: '今天',
				time: '18:30'
			}]
		}
	},

	computed: {
		...mapGetters([
			'userInfo',
			'currentFriend'
		])
	},

	beforeMount() {
		this.getFriendMemorandum({
			code: this.userInfo.code,
			directoryid: this.currentFriend.id
		})
	},

	methods: {
		...mapActions([
			'getFriendMemorandum'
		]),
		handleMonthChanged(month) {
			console.log(month)
		},
		handleDayChanged(day) {
			console.log(day)
		}
	},

	filters: {
		showDate(data) {
			const year = new Date().getFullYear(),
			month = () => {
				const m = new Date().getMonth() + 1
				let r = null;
				if(m < 10) {
					r = `0${m}`
				} else {
					r = m
				}

				return r
			},
			date = new Date().getDate();
			const [_year, _month, _date] = data.split('/');
			
			let result = '';
			if(year == _year && month() == _month && _date == date) {
				result = '今天 ';
			} else {
				result = `${_date}日 `
			}
			return result;
		}
	}
}