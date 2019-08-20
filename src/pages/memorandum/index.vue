<template>
	<div>
		<AppHeader name="备忘录"></AppHeader>
		<div class="mem_wrapper">
			<div class="ava_box">
				<img src="./images/avatarsample135.png" />
				<p>{{ currentFriend.name }}</p>
			</div>
			<vue-event-calendar
				:events="demoEvents"
				@day-changed="handleDayChanged"
				@month-changed="handleMonthChanged">
				<template scope="props">
					<div
						v-for="(event, index) in props.showEvents"
						class="event-item"
						:key="index"
					>
						<div class="events flex between aic">
							<div class="event_name flex aic">{{ event.title }}</div>
							<div class="event_time">{{ event.date | showDate }}{{ event.time }}</div>
						</div>
					</div>
				</template>
			</vue-event-calendar>
			<div class="addbtn content" style="background-color: transparent">
				<mt-button type="primary" size="large">添加备忘录</mt-button>
			</div>
		</div>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>