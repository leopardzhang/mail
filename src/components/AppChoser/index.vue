<template>
	<div class="item">
		<div>
			<div class="flex">
				<div class="item_name">
					<p>{{ name }}</p>
				</div>
				<div class="chose_area">
					<div class="radio_box">
						<ul class="radio_list flex">
							<li
								@click="handleChose(index)"
								v-for="(item, index) in options"
								:key="index">
								<div class="radio flex aic" :class="{active: current == index}">
									<div class="circle"></div>
									<div class="name">{{ item.name }}</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>