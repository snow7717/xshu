<template>
  <ccontent ref='ccontent' v-bind:summary='`${summary}(${total})`' v-bind:url='url' v-bind:nameSearch='true' v-bind:search='search' v-bind:selects='selects' v-on:search='index(1)' placeholder='请输入学院名' v-bind:datas='datas' v-bind:page='page' v-bind:total='total' v-bind:formshow='formshow' v-bind:rules='rules' v-bind:form='form' v-on:index='index' v-on:handleDatas='handleDatas' v-on:create='create' v-on:edit='edit' v-on:cancel='cancel'>
		<div slot='table'>
			<el-table-column prop='number'  label='职工号' show-overflow-tooltip></el-table-column>
			<el-table-column prop='name' label='姓名' show-overflow-tooltip></el-table-column>
			<el-table-column prop='jobtitle'  label='职称' show-overflow-tooltip></el-table-column>
			<el-table-column prop='post' label='职务' show-overflow-tooltip></el-table-column>
			<el-table-column prop='jobtitle' label='所在专业' show-overflow-tooltip></el-table-column>
			<el-table-column prop='bachelor'  label='最高学位' show-overflow-tooltip></el-table-column>
			<el-table-column prop='bachelor'  label='最高学位专业' show-overflow-tooltip></el-table-column>
			<el-table-column prop='phone' label='移动电话' show-overflow-tooltip></el-table-column>
			<el-table-column prop='bachelor'  label='是否双师型' show-overflow-tooltip></el-table-column>
		</div>
		<div slot='form'>
			<el-form-item label="姓名" prop='name'>
				<el-input v-model="form.name" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="职工号" prop='number'>
				<el-input v-model="form.number" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label='性别' prop='gender'>
				<el-radio v-model="form.gender" label="男">男</el-radio>
        <el-radio v-model="form.gender" label="女">女</el-radio>
			</el-form-item>
			<el-form-item label='出生年月' prop='birthday'>
				<el-date-picker v-model="form.birthday" type="date" placeholder="选择日期"></el-date-picker>
			</el-form-item>
			<el-form-item label='所在学院' prop='school'>
				<el-input v-model='form.school'></el-input>
			</el-form-item>
			<el-form-item label='最高学位获得单位' prop='highunit'>
				<el-input v-model='form.highunit'></el-input>
			</el-form-item>
			<el-form-item label='最高学位专业' prop='highprofession'>
				<el-input v-model='form.hightprofession'></el-input>
			</el-form-item>
			<el-form-item label='海外背景' prop='overseas'>
				<el-input v-model='form.overseas'></el-input>
			</el-form-item>
			<el-form-item label='研究方向' prop='researchto'>
				<el-input v-model='form.researchto'></el-input>
			</el-form-item>
			<el-form-item label='是否双师型'>
				<el-radio v-model="form.double" v-bind:label="true">是</el-radio>
        <el-radio v-model="form.double" v-bind:label="false">否</el-radio>
			</el-form-item>
			<el-form-item label='学术兼职'></el-form-item>
			<el-form-item label='政治面貌' prop='political'>
				<el-select v-model="form.political" filterable allow-create placeholder="请选择">
					<el-option label="九三学社" value="九三学社"></el-option>
					<el-option label="民革" value="民革"></el-option>
					<el-option label="民建" value="民建"></el-option>
					<el-option label="中共党员" value="中国党员"></el-option>
					<el-option label="无党派" value="无党派"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label='职称' prop='jobtitle'>
				<el-select v-model='form.jobtitle' filterable allow-create placeholder="请选择">
					<el-option label="副教授" value="副教授"></el-option>
					<el-option label="副研究馆员" value="副研究馆员"></el-option>
					<el-option label="副研究员" value="副研究员"></el-option>
					<el-option label="馆员" value="馆员"></el-option>
					<el-option label="讲师" value="讲师"></el-option>
					<el-option label="教授" value="教授"></el-option>
					<el-option label="预聘制副教授" value="预聘制副教授"></el-option>
					<el-option label="助教" value="助教"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label='最高学位' prop='bachelor'>
				<el-select v-model='form.bachelor' filterable allow-create placeholder="请选择">
				  <el-option label="博士" value="博士"></el-option>
					<el-option label="硕士" value="硕士"></el-option>
					<el-option label="学士" value="学士"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label='移动电话' prop='phone'>
				<el-input v-model='form.phone' type='number'></el-input>
			</el-form-item>
			<el-form-item label='电子邮箱' prop='email'>
				<el-input v-model='form.email' type='email'></el-input>
			</el-form-item>
			<el-form-item label='所在专业' prop='unit'>
				<el-input v-model='form.unit'></el-input>
			</el-form-item>
			<el-form-item label='职务' prop='post'>
				<el-input v-model='form.post'></el-input>
			</el-form-item>
		</div>
	</ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
