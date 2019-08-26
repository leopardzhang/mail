<template>
	<div>
		<AppHeader :name="name" @handleSave="save"></AppHeader>
		<AppItem
			v-for="(item, index) in hobbyList"
			@showPopup="showPopup(index)"
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
			<div class="pop_box content">
				<mt-checklist
					title="请选择"
					v-model="value"
					:options="options">
				</mt-checklist>
				<mt-field
					label="其他选项" 
					v-model="other"
					placeholder="自己输入,用空格分开"
					></mt-field>
				<button @click="hiddenPopup" type="button" class="btn btn-primary">确定</button>
			</div>
		</mt-popup>
		<mt-spinner v-show="loading" class="loading" type="double-bounce" color="#feb100"></mt-spinner>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>