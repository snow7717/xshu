<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='4-1'></caside>
			<el-main v-bind:style='"height:" + (windowH - 80) + "px"'>
			  <el-card shadow='never' class='card'>
				  <header slot="header">团队信息</header>
					<el-form ref="form0" :model='form0' v-bind:rules="rules0" label-width='110px' size='mini'>
					  <el-form-item label='单位名称' prop='name'>
						  <el-input v-model='form0.name'></el-input>
						</el-form-item>
						<el-form-item label='单位名称(英文)'>
						  <el-input v-model='form0.ename'></el-input>
						</el-form-item>
						<el-form-item label='团队名称' prop='team'>
						  <el-input v-model='form0.team'></el-input>
						</el-form-item>
						<el-form-item label='团队名称(英文)'>
						  <el-input v-model='form0.eteam'></el-input>
						</el-form-item>
						<el-form-item label='团队logo设定' prop='logo'>
						  <el-upload class="avatar" action="https://jsonplaceholder.typicode.com/posts/" v-bind:show-file-list="false" v-bind:on-success="handleAvatar" v-bind:before-upload="beforeAvatar">
							  <img v-if="form0.logo" v-bind:src="form0.logo" class="avatar">
								<i v-else class="el-icon-plus"></i>
							</el-upload>
						</el-form-item>
						<el-form-item>
						  <el-button type='primary' @click="submit('form0')">保存</el-button>
						</el-form-item>
					</el-form>
				</el-card>
				<el-card shadow='never' class='card'>
				  <header slot="header">成员申请 <i class='subtitle f-fs1 f-fsn'>(设置加入团队的问题与答案)</i></header>
					<el-form ref='form1' :model='form1' v-bind:rules="rules1" label-width='110px' size='mini'>
					  <el-form-item label='设定问题' prop='question'>
						  <el-input v-model='form1.question'></el-input>
						</el-form-item>
						<el-form-item label='设定答案' prop='answer'>
						  <el-input v-model='form1.answer'></el-input>
						</el-form-item>
						<el-form-item>
						  <el-button type='primary' v-on:click='submit("form1")'>保存</el-button>
						</el-form-item>
					</el-form>
				</el-card>
				<el-card shadow='never' class='card'>
				  <el-container slot='header'>
					  <el-main>管理员设置 <i class='subtitle f-fs1 f-fsn'>(一个团队可设置1位超级管理员和14位管理员，便于同时管理)</i></el-main>
						<el-aside width='100px' class='f-tar'>
						  <el-button size='mini' type='primary' v-on:click='handleAdd'>添加管理员</el-button>
						</el-aside>
					</el-container>
					<el-table size='mini' v-bind:data="admins">
					  <el-table-column prop="name" label="姓名"></el-table-column>
						<el-table-column prop="type" label="类型"></el-table-column>
						<el-table-column prop="phone" label="联系方式"></el-table-column>
						<el-table-column label="操作" width="80">
							<template slot-scope="scope">
								<el-button @click="del(scope.row)" type="text" size='mini' v-if='scope.row.type == "管理员"'>删除</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-dialog title="添加管理员" :visible.sync="adminShow" v-bind:show-close='false' class='admin-add'>
					  <el-container class='add-header'>
						  <el-main>
							  <el-checkbox v-bind:indeterminate="teacher.isIndeterminate" v-model="teacher.checkAll" @change="teacherAll" class='check-all'>全选</el-checkbox>
							</el-main>
							<el-aside width='140px'>
							  <el-input v-model='teacher.searchWord' size='mini' placeholder='搜索成员'></el-input>
							</el-aside>
						</el-container>
						<el-checkbox-group v-model="teacher.checkeds" @change="teacherChange">
							<el-checkbox v-for="(item,index) in teacher.data" v-bind:label="item" v-bind:key="index" v-if='item.name.indexOf(teacher.searchWord) != -1 && admins.filter((admin) => {return admin.phone == item.phone}).length == 0'>{{item.name}}</el-checkbox>
						</el-checkbox-group>
						<el-row slot="footer">
						  <el-col :span='24' >
							  <el-button @click="adminShow = false" size='mini'>取 消</el-button>
                <el-button type="primary" @click="confirmAdd" size='mini'>确 定</el-button>
							</el-col>
						</el-row>
					</el-dialog>
				</el-card>
			</el-main>
		</el-container>
	</div>	
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
