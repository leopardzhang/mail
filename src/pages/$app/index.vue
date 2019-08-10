<template>
	<main>
		<div class="router_box">
			<ul class="flex between router_list">
				<li>
					<router-link to="/tixing">提醒</router-link>
				</li>
				<li>
					<router-link to="/index">联系人</router-link>
				</li>
				<li>
					<router-link to="/act">收藏</router-link>
				</li>
			</ul>
		</div>
		<transition :name="transformName">
			<keep-alive>
				<router-view class="Router" />
			</keep-alive>
		</transition>
	</main>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>