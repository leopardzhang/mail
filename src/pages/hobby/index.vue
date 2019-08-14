<template>
	<div>
		<AppHeader :name="name" @handleSave="save"></AppHeader>
		<AppItem
			v-for="(item, index) in hobbyList"
			@showPopup="showPopup"
			:list="item"
			:index="index"
			:key="index"
			>
		</AppItem>
		<AppChoser
			@chose="handleChose"
			v-for="(item, index) in orgOtherHobby"
			:name="item.name"
			:options="item.options"
			:current="item.current"
			:itemIndex="index"
			:key="item.id"
		/>
		<mt-popup
			v-model="popupVisible"
			:position="popPosition">
			<div class="pop_box">
				<mt-checklist
					title="请选择"
					v-model="value"
					:options="options">
				</mt-checklist>
				<div class="shareFooter">
					<div class="shareCancel" @click="hiddenShare">取消</div>
				</div>
			</div>
		</mt-popup>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>