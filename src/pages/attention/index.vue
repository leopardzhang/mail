<template>
	<div>
		<AppHeader name="注意事项"></AppHeader>
		<div class="at_item">
			<div class="content">
				<p class="at_title">对个人造成约束的部门或人</p>
				<div class="at_person">
					<ul>
						<li class="flex between aic">
							<p class="at_person-name">mouren</p>
							<span class="at_person-position">经理</span>
						</li>
						<li class="flex between aic">
							<p class="at_person-name">mouren</p>
							<span class="at_person-position">经理</span>
						</li>
						<li class="flex between aic">
							<p class="at_person-name">mouren</p>
							<span class="at_person-position">经理</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="at_item">
			<div class="content">
				<p class="at_title">身边好友</p>
				<div class="relationship">
					<div class="friends flex">
						<div class="relationship_title">
							<p>友好关系</p>
						</div>
						<div class="person_list">
							<div class="person_item" v-for="item in 8">
								<div class="img"></div>
								<p class="name">张益达</p>
							</div>
							<div class="increment c_btn"></div>
							<div class="remove c_btn"></div>
						</div>
					</div>
					<div class="enemy flex">
						<div class="relationship_title">
							<p>敌对关系</p>
						</div>
						<div class="person_list">
							<div class="person_item" v-for="item in 6">
								<div class="img"></div>
								<p class="name">张益达</p>
							</div>
							<div class="increment c_btn"></div>
							<div class="remove c_btn"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="at_item">
			<div class="content">
				<p class="at_title">其他</p>
			</div>
		</div>
	</div>
</template>

<script src="./index.js"></script>

<style scoped src="./index.scss" lang="scss"></style>