<template>
	<div class="main-wrapper account-wrapper container">
        <div class="account-page">
			<div class="account-center">
				<div>
                    <form class="form-signin">
						<div class="account-logo">
                            <h1 class="logo_title">欢迎您</h1>
                        </div>
                        <div class="form-group">
                            <input v-model="loginForm.username" type="text" autofocus class="form-control">
                        </div>
						<div class="form-group">
                            <input v-model="loginForm.password" type="password" class="form-control">
                        </div>
                        <div class="form-group go_to_login text-right">
							<a class="fl" href="javascript:">忘记密码?</a>
                            <router-link to="register">还没有账号？去注册</router-link>
                        </div>
                        <div class="form-group text-center">
							<mt-button @click="handleSubmit" type="primary" size="large">登录</mt-button>
                        </div>
                    </form>
                </div>
			</div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>