<template>
	<div>
		<img @click="actionSheet" class="banner" :src="upload ? imagePath : (currentFriend.headimage ? currentFriend.headimage : imagePath)">
		<div class="person_info content flex between aic">
			<div class="info flex column">
				<span class="name">{{ currentFriend.name }}</span>
				<span class="tel">{{ currentFriend.tel }}</span>
			</div>
			<div class="control flex">
				<div class="tel button">
					<a :href="'tel:'+currentFriend.tel"></a>
				</div>
			</div>
		</div>
		<div class="content">
			<ul class="info_list">
				<li
					@click="jumpNext(item.to)"
					v-for="(item, index) in info_ctrl"
					:key="index">
					<div class="flex aic">
						<div class="icon"></div>
						<span>{{ item.name }}</span>
						<mt-badge style="margin-left: 5px" type="error" v-if="!item.state" size="small">未填写</mt-badge>
					</div>
					<div class="arr_right"></div>
				</li>
			</ul>
		</div>
		<div class="mask" v-if="sheetVisible" @click="hideMask">
		</div>
		<label v-if="sheetVisible" class="choser" for="file">点击更换好友照片</label>
		<input @change="handleFileChange" ref="inputer" id="file" type="file" />
	</div>
</template>

<script src="./index.js"></script>

<style lang="scss" src="./index.scss"></style>