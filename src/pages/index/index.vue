<template>
	<main>
		<div class="search flex aic">
			<div class="input_box flex aic">
				<div class="i_search"></div>
				<input type="text">
			</div>
			<div class="avatar" @click="addPerson"></div>
		</div>
		<mt-index-list class="index_list">
			<mt-index-section index="#">
				<mt-cell
					@click.native="handleFriendItemClick(item.id)"
					v-for="(item, index) in friendsList"
					:id="item.id"
					:key="index"
					:title="item.name"
				>
				</mt-cell>
			</mt-index-section>
		</mt-index-list>
	</main>
</template>

<script src="./index.js"></script>

<style lang="scss" src="./index.scss"></style>