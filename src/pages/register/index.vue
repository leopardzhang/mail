<template>
	<div class="main-wrapper account-wrapper container">
        <div class="account-page">
			<div class="account-center">
				<div>
                    <div class="form-signin">
						<div class="account-logo">
                            <h1 class="logo_title">新用户注册</h1>
                        </div>
                        <div class="form-group">
                            <input v-model="registerForm.username" type="text" placeholder="请输入用户名" class="form-control">
                        </div>
						<div class="form-group">
                            <input v-model="registerForm.password" type="password" placeholder="请输入密码" class="form-control">
                        </div>
                        <div class="form-group">
                            <input v-model="registerForm.tel" type="tel" placeholder="请输入手机号" class="form-control">

                        <div class="form-group go_to_login text-right">
                            <router-link to="login">已有账号？去登录</router-link>
                        </div>
						</div>
                        <div class="form-group text-center">
							<mt-button @click="handleSubmit" type="primary" size="large">注册</mt-button>
						</div>
                    </div>
                </div>
			</div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>