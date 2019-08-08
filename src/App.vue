<template>
	<div id="app">
		<!-- <AppHeader :name="pageName" @handleSave=""></AppHeader>
		<AppChoser></AppChoser>
		<AppItem></AppItem>
		<AppInfo></AppInfo> -->
		<div class="router_box">
			<ul class="flex between router_list">
				<li>
					<router-link to="/tixing">提醒</router-link>
				</li>
				<li>
					<router-link to="/index">联系人</router-link>
				</li>
				<li>
					<router-link to="/act">收藏</router-link>
				</li>
			</ul>
		</div>
		<transition :name="transformName">
			<keep-alive>
				<router-view class="Router" />
			</keep-alive>
		</transition>
	</div>
</template>

<script>
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
};
</script>

<style lang="scss">
@import "common/variable.scss";

body {
	background-color: #f4f4f4;
}
.content {
	padding: 26px;
}

.router_box {
	background-color: white;
}
.router_list {
	padding-top: 24px;

	a {
		font-size: 34px;
		color: #383838;
		padding: 0 26px;
		display: inline-block;
		line-height: 2;

		&.router-link-active {
			line-height: 1.57;
			font-size: 38px;
			border-bottom: 5px solid $action-color;
		}
	}
}


.slide-left-enter,
.slide-right-leave-active {
	opacity: 0;
	transform: translate3d(-100%, 0, 0);
}

.slide-left-leave-active,
.slide-right-enter {
	opacity: 0;
	transform: translate3d(100%, 0, 0);
}
#app {
	position: relative;
	width: 100%;
}
.Router {
	width: 100%;
	transition: all 0.377s ease;
	will-change: transform;
	backface-visibility: hidden;
	perspective: 1000;
}
</style>
