<template>
	<div id="app">
		<router-view />
		<!-- <AppHeader :name="pageName" @handleSave=""></AppHeader>
		<AppChoser></AppChoser>
		<AppItem></AppItem>
		<AppInfo></AppInfo> -->
	</div>
</template>

<script>
export default {
	name: 'app'
};
</script>

<style lang="scss">
.content {
	padding: 0 26px;
}
</style>
