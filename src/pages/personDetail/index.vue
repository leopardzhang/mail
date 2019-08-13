<template>
	<div>
		<img class="banner" src="../../assets/images/b_02.jpg">
		<div class="person_info content flex between aic">
			<div class="info flex column">
				<span class="name">李老师</span>
				<span class="tel">13674637162</span>
			</div>
			<div class="control flex">
				<div class="tel button">
					<a href="tel: 13674637162"></a>
				</div>
				<div class="sms button">
					<a href="sms: 13674637162"></a>
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
					</div>
					<div class="arr_right"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./index.js"></script>

<style lang="scss" src="./index.scss"></style>