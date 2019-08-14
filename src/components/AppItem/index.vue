<template>
	<div class="item">
		<div>
			<div class="flex">
				<div class="item_name">
					<p>{{ list.name }}</p>
				</div>
				<div class="chose_area" @click="showPopup">
					<div class="input_area flex aic">
						<div class="item_box">
							<span
								v-for="(item, index) in list.inputList"
								:key="index"
								class="item"
								>
								{{ item }}
							</span>
						</div>
						<div class="right_arr"></div>
					</div>
					<div class="badeg_box">
						<ul class="flex">
							<li
								v-for="(item, index) in list.baseList"
								:key="index"
							>
								<div class="badeg active">
									<span>{{ item }}</span>
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