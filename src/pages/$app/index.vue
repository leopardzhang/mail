<template>
	<main>
		<div class="router_box">
			<ul class="flex between router_list">
				<li v-for="(item, index) in routerList" :key="index">
					<router-link
						@click.native="changeRouterIndex(index)"
						:class="{now: routerIndex == index}"
						:to="item.to"
					>
						{{ item.name }}
					</router-link>
				</li>
			</ul>
		</div>
		<div class="router_container">
			<transition :name="transitionName">
				<router-view class="Router" />
			</transition>
		</div>
	</main>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>