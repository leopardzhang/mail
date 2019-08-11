<template>
	<div class="main-wrapper account-wrapper container">
        <div class="account-page">
			<div class="account-center">
				<div>
                    <form class="form-signin">
						<div class="account-logo">
                            <a href="index.html"><img src="assets/img/logo-dark.png" alt=""></a>
                        </div>
                        <div class="form-group">
                            <label>Username or Email</label>
                            <input v-model="loginForm.username" type="text" autofocus class="form-control">
                        </div>
						<div class="form-group">
                            <label>Password</label>
                            <input v-model="loginForm.password" type="password" class="form-control">
                        </div>
                        <div class="form-group text-right">
                            <router-link to="register">还没有账号？去注册</router-link>
                        </div>
                        <div class="form-group text-center">
                            <button @click="handleSubmit" type="button" class="btn btn-primary account-btn">登录</button>
                        </div>
                    </form>
                </div>
			</div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>