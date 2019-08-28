<template>
	<div class="item">
		<div>
			<div class="flex aic">
				<div class="item_name">
					<p>{{ name }}</p>
				</div>
				<div class="chose_area">
					<div class="radio_box">
						<input
							class="info_value"
							type="text" v-model="loan"
							 @input="updateMessage">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>