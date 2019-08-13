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
			<mt-index-section class="first" index="">
				<mt-cell title="">
					<div class="icon_box flex aic">
						<img class="i_index" src="@assets/images/icon_03.jpg" />
						<span class="index_font">群组</span>
					</div>
					<div class="arr_right"></div>
				</mt-cell>
				<mt-cell title="">
					<div class="icon_box flex aic">
						<img class="i_index" src="@assets/images/icon_06.jpg" />
						<span class="index_font">家庭</span>
					</div>
					<div class="arr_right"></div>
				</mt-cell>
				<mt-cell title="">
					<div class="icon_box flex aic">
						<img class="i_index" src="@assets/images/icon_08.jpg" />
						<span class="index_font">饭局</span>
					</div>
					<div class="arr_right"></div>
				</mt-cell>
			</mt-index-section>
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
			<mt-index-section index="A">
				<mt-cell title="Aaron"></mt-cell>
				<mt-cell title="Alden"></mt-cell>
				<mt-cell title="Austin"></mt-cell>
			</mt-index-section>
			<mt-index-section index="B">
				<mt-cell title="Baldwin"></mt-cell>
				<mt-cell title="Braden"></mt-cell>
			</mt-index-section>
			<mt-index-section index="Z">
				<mt-cell title="Zack"></mt-cell>
				<mt-cell title="Zane"></mt-cell>
			</mt-index-section>
		</mt-index-list>
	</main>
</template>

<script src="./index.js"></script>

<style lang="scss" src="./index.scss"></style>