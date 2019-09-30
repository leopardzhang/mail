<template>
	<div>
		<AppHeader :name="pageName" @handleSave="save"></AppHeader>
		<mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
		<mt-field label="电话号" placeholder="请输入联系方式" v-model="tel"></mt-field>
	</div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" scoped></style>