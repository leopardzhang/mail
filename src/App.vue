<template>
	<div id="app">
		<transition :name="transitionName">
			<keep-alive>
				<router-view class="base-router" />
			</keep-alive>
		</transition>
		<!-- <AppHeader :name="pageName" @handleSave=""></AppHeader>
		<AppChoser></AppChoser>
		<AppItem></AppItem>
		<AppInfo></AppInfo> -->
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			transitionName: 'slide-up'
		}
	},
};
</script>

<style lang="scss">
.content {
	padding: 0 26px;
}

.base-router {
	transition: all 0.377s ease-in-out;
	will-change: transform;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
}

.slide-up-leave-active {
	opacity: 0;
	transform: scale(0.8);
}

.slide-up-enter-active {
	opacity: 0;
	transform: scale(1);
}
</style>
