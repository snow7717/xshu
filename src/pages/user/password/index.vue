<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active=''></caside>
			<el-main v-bind:style='"height:" + (windowH - 80) + "px"'>
			  <el-form ref="form" class='form' :model="form" label-width="160px" size='mini' v-bind:rules='rules'>
				  <el-form-item label='原密码' prop='oldpwd'>
					  <el-input v-model='form.oldpwd' type='password'></el-input>
					</el-form-item>
					<el-form-item label='新密码' prop='newpwd'>
					  <el-input v-model='form.newpwd' type='password'></el-input>
					</el-form-item>
					<el-form-item label='确认新密码' prop='newpwd_repeat'>
					  <el-input v-model='form.newpwd_repeat' type='password'></el-input>
					</el-form-item>
					<el-form-item>
					  <el-button type='primary' v-on:click='submit("form")'>保存</el-button>
					</el-form-item>
				</el-form>
			</el-main>
		</el-container>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
