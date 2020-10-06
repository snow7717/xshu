<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='1'></caside>
			<el-main>
			  <el-row v-if='members.length == 0'>
				  <el-col :span='24' class='f-tac'>
					  <el-page-header class='page-header' @back="go('/member')" content="导入成员"></el-page-header>
					  <i class='upload el-icon-upload'></i>
						<br>
						<el-upload name='files' action='/api/user/import-check' v-bind:headers='{"Access-Token": user.token}' v-bind:data='{"colgId": user.role.collegeid}' accept='.xlsx' v-bind:on-success='uploadSuccess'>
						  <el-button type='primary' size='mini'>上传Excel</el-button>
						</el-upload>
						<el-alert type="success" v-bind:closable='false' class='alert'>
						  <p slot='title' class='f-fs1'>请 <el-link v-bind:underline='false' type="primary" href='https://www.taleyo.cn/zqy/yaht/template/%E5%AF%BC%E5%85%A5%E6%88%90%E5%91%98%E6%A8%A1%E6%9D%BF.xlsx'>下载模板文件</el-link> 并按项目准确填写成员信息表格</p>
						</el-alert>
					</el-col>
				</el-row>
				<el-row v-else>
				  <el-col :span='24' class='opera f-tar'>
					  <el-button type='default' size='mini' v-on:click='back'>返回</el-button>
						<el-button type='primary' size='mini' v-on:click='importer'>导入</el-button>
					</el-col>
					<el-col :span='24'>
					  <el-table v-bind:data="members" stripe size='mini'>
							<el-table-column prop="name" label="姓名" width='80px'></el-table-column>
							<el-table-column prop="tel" label="手机号"></el-table-column>
							<el-table-column prop="position" label="行政职务" ></el-table-column>
							<el-table-column prop="jobnum" label="工号"></el-table-column>
							<el-table-column prop="email" label="邮箱" width='160px'></el-table-column>
							<el-table-column prop="birthday" label="出生年月" width='140px'></el-table-column>
							<el-table-column prop="title" label="职称"></el-table-column>
							<el-table-column prop="jobtype" label="状态" width='60px'></el-table-column>
							<el-table-column prop="degree" label="最高学历"></el-table-column>
							<el-table-column prop="jointime" label="加入时间" width='140px'></el-table-column>
						</el-table>
					</el-col>
				</el-row>
			</el-main>
		</el-container>
	</div>	
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
