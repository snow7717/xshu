<template>
  <div class='container' v-bind:style='"height:" + windowH + "px"'>
	  <el-container>
			<el-main class='main'>
			  <h1 class='project-name' v-bind:style='"margin-top:" + (windowH-320)/2 + "px"'>河北经贸大学 | 商学院</h1>
				<h2 class='project-subname f-fwn'>成果管理平台</h2>
				<p class='copyright'>学术格子提供技术支持 @copyright 客服微信：acagrid-XY</p>
			</el-main>
			<el-aside width='320px' class='aside'>
			  <el-card shadow='never' class='form-card f-tac' v-bind:style='"top:" + (windowH-320)/2 + "px"' v-if='logged'>
				  <el-avatar :size="60" src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKQWVO4ebJ6Ia8ZKJIbWQh6Ccy2Hqxwzrr9Yomgb1jFfP0JAP1RqQMhDB6y0ybMRNIXNfTSdsngkQ/132"></el-avatar>
					<h2 class='user'>张玉老师</h2>
					<p class='welcome f-fwb'>欢迎来到成果管理平台</p>
					<p>
					  <el-button class='select-btn w-100' type="primary">我的成果</el-button>
					</p>
					<p>
					  <el-button class='select-btn w-100' type="default" v-on:click='go("/")'>管理学院</el-button>
					</p>
				</el-card>
			  <el-card shadow='never' class='form-card' v-bind:style='"top:" + (windowH-288)/2 + "px"' v-else>
					<header slot="header" class="clearfix">
						<h4>账户登录</h4>
					</header>
					<el-form ref="form" :model="form" :rules="rules">
						<el-form-item prop='account'>
							<el-input v-model="form.account" placeholder='请输入账号'></el-input>
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