<template>
  <div class='container' v-bind:style='"height:" + windowH + "px"'>
	  <el-container>
			<el-main class='main'>
			  <h1 class='project-name' v-bind:style='"margin-top:" + (windowH-320)/2 + "px"'>山东财经大学 | 管理科学与工程学院</h1>
				<h2 class='project-subname f-fwn'>数字化协同管理平台</h2>
			</el-main>
			<el-aside width='320px' class='aside'>
			  <el-card shadow='never' class='form-card' v-bind:style='"top:" + (windowH-288)/2 + "px"'>
					<header slot="header" class="clearfix">
						<h4>账户登录</h4>
					</header>
					<el-form ref="form" :model="form" :rules="rules">
						<el-form-item prop='username'>
							<el-input v-model="form.username" placeholder='请输入账号'></el-input>
						</el-form-item>
						<el-form-item prop='password'>
							<el-input v-model="form.password" type='password' placeholder='请输入密码'></el-input>
						</el-form-item>
						<el-form-item>
							<el-button class='login' type="primary" v-on:click='submit("form")'>登录</el-button>
						</el-form-item>
					</el-form>
				</el-card>
			</el-aside>
		</el-container>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>