<template>
	<div>
		<AppHeader :name="name" @handleSave="save"></AppHeader>
		<AppItem v-for="(item, index) in hobbyList" :list="item" :key="index"></AppItem>
		<AppChoser
			@chose="handleChose"
			v-for="(item, index) in orgOtherHobby"
			:name="item.name"
			:options="item.options"
			:current="item.current"
			:itemIndex="index"
			:key="index"
		/>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>