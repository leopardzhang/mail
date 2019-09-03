<template>
	<div>
		<AppHeader :name="name" @handleSave="save"></AppHeader>
		<AppInfo
			:name="loan.name"
			:value="loan.value"
			@updateMessage="changeLoanValue"></AppInfo>
		<AppChoser
			@chose="handleChose"
			v-for="(item, index) in divingage"
			:name="item.name"
			:options="item.options"
			:current="item.current"
			:itemIndex="index"
			:key="item.name"
		/>
		<AppItem
			v-for="(item, index) in wagenList"
			@showPopup="showPopup(index)"
			:list="item"
			:index="index"
			:key="index"
		>
		</AppItem>
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
				<mt-button @click="hiddenPopup" type="primary" size="large">确定</mt-button>
			</div>
		</mt-popup>
		<mt-spinner v-show="loading" class="loading" type="double-bounce" color="#feb100"></mt-spinner>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>