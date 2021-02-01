<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='1-2'></caside>
			<el-main class='result-main'>
				<ccontent ref='ccontent' v-bind:summary='`${summary}(${total})`' v-bind:url='url' v-bind:nameSearch='true' v-bind:search='search' v-bind:selects='selects' v-on:search='index(1)' placeholder='请输入专业名' v-bind:datas='datas' v-bind:page='page' v-bind:total='total' v-bind:formshow='formshow' v-bind:rules='rules' v-bind:form='form' v-on:index='index' v-on:handleDatas='handleDatas' v-on:create='create' v-on:edit='edit' v-on:cancel='cancel'>
				  <div slot='table'>
						<el-table-column prop='number' label='专业编号' show-overflow-tooltip></el-table-column>
						<el-table-column prop='name' label='专业名称' show-overflow-tooltip></el-table-column>
						<el-table-column prop='school' label='所在学院' show-overflow-tooltip></el-table-column>
						<el-table-column prop='year' label='设立年度' show-overflow-tooltip></el-table-column>
					</div>
					<div slot='form'>
					  <el-form-item label="专业编号" prop='number'>
							<el-input v-model="form.number" autocomplete="off"></el-input>
						</el-form-item>
					  <el-form-item label="专业名称" prop='name'>
							<el-select v-model="form.name" filterable allow-create placeholder="请选择">
							  <el-option label="信息管理与信息系统" value="信息管理与信息系统"></el-option>
								<el-option label="电子商务" value="电子商务"></el-option>
								<el-option label="物流管理" value="物流管理"></el-option>
								<el-option label="物流管理" value="物流管理"></el-option>
								<el-option label="工程管理" value="工程管理"></el-option>
								<el-option label="大数据管理与应用" value="大数据管理与应用"></el-option>
								<el-option label="管理科学" value="管理科学"></el-option>
								<el-option label="信息管理与信息系统(服务外包方向)" value="信息管理与信息系统(服务外包方向)"></el-option>
								<el-option label="信息管理与信息系统(大数据与商务分析)" value="信息管理与信息系统(大数据与商务分析)"></el-option>
								<el-option label="管理科学与工程类" value="管理科学与工程类"></el-option>
								<el-option label="电子商务类" value="电子商务类"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label='所在学院' prop='school'>
						  <el-input v-model='form.school'></el-input>
						</el-form-item>
						<el-form-item label='设立年度' prop='year'>
						   <el-date-picker v-model="form.year" type="year" placeholder="选择年份"></el-date-picker>
						</el-form-item>
					</div>
				</ccontent>
			</el-main>
		</el-container>
	</div>	
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
