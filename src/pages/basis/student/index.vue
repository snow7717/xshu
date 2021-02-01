<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='1-4'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入姓名'>
					<el-aside width='170px' slot='aside'>
					  <el-upload action="#" v-bind:show-file-list='false' list-type="text" v-bind:http-request='importer' accept=".xls,.xlsx" class='f-ib'>
					    <el-button slot='default' type="primary" size='mini'>导入</el-button>
						</el-upload>	
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="basis" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='number' width='100' label='学号' show-overflow-tooltip></el-table-column>
					<el-table-column prop='name' width='60' label='姓名' show-overflow-tooltip></el-table-column>
					<el-table-column prop='gender' width='50' label='性别' show-overflow-tooltip></el-table-column>
					<el-table-column prop='birth' label='出生日期' show-overflow-tooltip></el-table-column>
					<el-table-column prop='class_' label='班级' show-overflow-tooltip></el-table-column>
					<el-table-column prop='profession' label='专业' show-overflow-tooltip></el-table-column>
					<el-table-column prop='grade' width='50' label='年级' show-overflow-tooltip></el-table-column>
					<el-table-column prop='teacher' width='80' label='导师'></el-table-column>
					<el-table-column fixed="right" label='操作' width='100px'>
					  <template slot-scope='scope'>
						  <i class='edit f-csp el-icon-edit' title='编辑' v-on:click='edit(scope.row.id)'></i>
							<i class='delete f-csp el-icon-delete' title='删除' v-on:click='del(scope.row.id)'></i>
						</template>
					</el-table-column>
				</el-table>
				<el-row class='page'>
				  <el-col :span='24' class='f-tac'>
					  <el-pagination layout="prev, pager, next" v-bind:total="total" v-on:current-change='index'></el-pagination>
					</el-col>
				</el-row>
				<el-dialog title="" class='edit-basis' :visible.sync="editshow" v-bind:show-close='false'>
					<el-form :model="form" label-width='80px' size='mini' v-bind:rules="rules" ref="form">
					  <el-form-item label="学号" prop='number'>
							<el-input v-model="form.number" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="姓名" prop='name'>
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label='性别' prop='gender'>
						  <el-radio v-model="form.gender" label="男">男</el-radio>
              <el-radio v-model="form.gender" label="女">女</el-radio>
						</el-form-item>
						<el-form-item label="学院名称" prop='school'>
						  <el-select v-model='form.school' filterable allow-create placeholder="请选择">
							  <el-option label='管理科学与工程学院' value='管理科学与工程学院'></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="专业" prop='profession'>
						  <el-select v-model='form.profession' filterable allow-create>
							  <el-option label='大数据管理与应用' value='大数据管理与应用'></el-option>
								<el-option label='电子商务(管科)' value='电子商务(管科)'></el-option>
								<el-option label='电子商务类' value='电子商务类'></el-option>
								<el-option label='工程管理' value='工程管理'></el-option>
								<el-option label='管理科学' value='管理科学'></el-option>
								<el-option label='管理科学与工程类' value='管理科学与工程类'></el-option>
								<el-option label='物流管理' value='物流管理'></el-option>
								<el-option label='信息管理与信息系统' value='信息管理与信息系统'></el-option>
								<el-option label='信息管理与信息系统(大数据与商务分析)' value='信息管理与信息系统(大数据与商务分析)'></el-option>
								<el-option label='信息管理与信息系统(服务外包方向)' value='信息管理与信息系统(服务外包方向)'></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="班级" prop='class_'>
						  <el-select v-model='form.class_' filterable allow-create>
							  <el-option v-for='(item,index) in classArr' v-bind:key='index' v-bind:label='item.name' v-bind:value='item.name'></el-option>
						  </el-select>
						</el-form-item>
						<el-form-item label="年级" prop='grade'>
							<el-date-picker v-model="form.grade" type="year" placeholder="选择年" value-format='yyyy'></el-date-picker>
						</el-form-item>
						<el-form-item label='出生日期' prop='birth'>
						  <el-date-picker v-model="form.birth" type="date" placeholder="选择日期" value-format='yyyy-mm-dd'></el-date-picker>
						</el-form-item>
						<el-form-item label='学历层次' prop='education'>
						  <el-select v-model='form.education' filterable allow-create placeholder="请选择">
							  <el-option label="本科" value="本科"></el-option>
								<el-option label="硕士" value="硕士"></el-option>
								<el-option label="博士" value="博士"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label='导师' prop='teacher'>
						  <el-input v-model='form.teacher'></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="editshow = false" size='mini'>取 消</el-button>
						<el-button type="primary" size='mini' v-on:click='submit("form")'>确 定</el-button>
					</div>
        </el-dialog>
			</el-main>
		</el-container>
	</div>	
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
