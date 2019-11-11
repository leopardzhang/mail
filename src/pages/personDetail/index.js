import {
	mapActions,
	mapGetters
} from 'vuex'
import {
	MessageBox
} from 'mint-ui';
import axios from 'axios';

export default {
	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.getState({
				code: vm.userInfo.code,
				id: vm.currentFriend.id
			});
		})
	},

	data() {
		return {
			sheetVisible: false,

			file: null,

			imagePath: require('@/assets/images/b_02.jpg'),
			upload: false
		}
	},

	computed: {
		...mapGetters([
			'currentFriend',
			'userInfo',
			'currentFriend',
			'info_ctrl'
		])
	},

	methods: {
		...mapActions([
			'getState',
			'setPicture',
			'refreshFriendList'
		]),

		jumpNext(to) {
			this.$router.push({
				name: to
			})
		},

		actionSheet() {
			this.sheetVisible = true;
		},

		hideMask() {
			this.sheetVisible = false;
		},

		handleFileChange(e) {

			let inputDOM = this.$refs.inputer;
			this.file = inputDOM.files[0];
			const param = new FormData();
			param.append("file", this.file, this.file.name);

			const config = {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			};

			axios.post("http://119.3.186.37/MailList/imagesController.do?ajaxUpload", param, config).then(res => {
				const imagePath = JSON.parse(res.data).imagePath;
				this.imagePath = 'http://119.3.186.37/' + imagePath;
				this.sheetVisible = false;
				this.upload = true;

				const friendsList = JSON.parse(localStorage.getItem('friendsList'))
				for (let i = 0; i < friendsList.length; i++) {
					if (friendsList[i].id == this.currentFriend.id) {
						friendsList[i].headimage = 'http://119.3.186.37/' + imagePath;
					}
				}
				this.setPicture({
					code: this.userInfo.code,
					id: this.currentFriend.id,
					headimage: 'http://119.3.186.37/' + imagePath
				});

				localStorage.setItem('friendsList', JSON.stringify(friendsList));
				this.refreshFriendList();
			});
		}
	}
}
