<template>
	<div>
		<AppHeader :name="name" @handleSave="save"></AppHeader>
		<AppChoser
			@chose="handleChose"
			v-for="(item, index) in itemList"
			:name="item.name"
			:options="item.options"
			:current="item.current"
			:itemIndex="index"
			:key="index"
		/>
		<mt-spinner v-show="loading" class="loading" type="double-bounce" color="#feb100"></mt-spinner>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>