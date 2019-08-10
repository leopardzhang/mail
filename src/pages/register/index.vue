<template>
	<div class="main-wrapper account-wrapper">
        <div class="account-page">
			<div class="account-center">
				<div class="account-box">
                    <form action="index.html" class="form-signin">
						<div class="account-logo">
                            <a href="index.html"><img src="assets/img/logo-dark.png" alt=""></a>
                        </div>
                        <div class="form-group">
                            <label>Username or Email</label>
                            <input v-model="registerForm.username" type="text" autofocus="" class="form-control">
                        </div>
						<div class="form-group">
                            <label>Password</label>
                            <input v-model="registerForm.password" type="password" autofocus="" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Tel</label>
                            <input v-model="registerForm.tel" type="tel" class="form-control">
                        </div>
                        <div class="form-group text-right">
                            <a href="forgot-password.html">Forgot your password?</a>
                        </div>
                        <div class="form-group text-center">
                            <button @click="handleSubmit" type="button" class="btn btn-primary account-btn">注册</button>
                        </div>
                    </form>
                </div>
			</div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>