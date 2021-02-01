<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active=''></caside>
			<el-main v-bind:style='"height:" + (windowH - 80) + "px"'>
			  <el-form :model='form' size='mini' ref='form' v-bind:rules='rules' label-width='110px'>
				  <el-form-item label='真实姓名' prop='name'>
					  <el-input v-model='form.name'></el-input>
					</el-form-item>
					<el-form-item label='出生年月' prop='birthday'>
					  <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期"></el-date-picker>
					</el-form-item>
					<el-form-item label='职称' prop='title'>
					  <el-select v-model="form.title" placeholder="请选择">
							<el-option v-for="(item,index) in jobs" v-bind:key="index" v-bind:label="item" v-bind:value="item"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='职位' prop='position'>
					  <el-select v-model="form.position" placeholder="请选择">
							<el-option v-for="(item,index) in positions" v-bind:key="index" v-bind:label="item" v-bind:value="item"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='工作身份' prop='jobtype'>
					  <el-select v-model='form.jobtype'>
						  <el-option label='全职' value='全职'></el-option>
							<el-option label='兼职' value='兼职'></el-option>
							<el-option label='退休' value='退休'></el-option>
							<el-option label='离职' value='离职'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='最高学位' prop='degree'>
					  <el-select v-model='form.degree'>
						  <el-option label='博士' value='博士'></el-option>
							<el-option label='硕士' value='硕士'></el-option>
							<el-option label='学士' value='学士'></el-option>
							<el-option label='学士以下' value='学士以下'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='系部'>
					  <el-select v-model='form.depart'>
						  <el-option v-for='(item,index) in departs' v-bind:key='index' v-bind:label='item.collegeName' v-bind:value='item.id'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='加入学院时间' prop='jointime'>
					  <el-date-picker v-model="form.jointime" type="date" placeholder="选择日期"></el-date-picker>
					</el-form-item>
					<el-form-item label='电话号吗' prop='tel'>
					  <el-input type='number' v-model='form.tel' disabled></el-input>
					</el-form-item>
					<el-form-item label='常用邮箱' prop='email'>
					  <el-input type='email' v-model='form.email'></el-input>
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
