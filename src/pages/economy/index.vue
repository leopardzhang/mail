<template>
	<div>
		<AppHeader :name="name" @handleSave="save"></AppHeader>
		<AppInfo :name="loan.name" :value="loan.value"></AppInfo>
		<AppChoser
			@chose="handleChose"
			v-for="(item, index) in divingage"
			:name="item.name"
			:options="item.options"
			:current="item.current"
			:itemIndex="index"
			:key="item.name"
		/>
		<AppItem v-for="(item, index) in car" :list="item" :key="index"></AppItem>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>