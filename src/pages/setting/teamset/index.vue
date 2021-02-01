<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='6-2'></caside>
			<el-main v-bind:style='"height:" + (windowH - 80) + "px"'>
				<el-card shadow='never' class='card'>
				  <el-container slot='header'>
					  <el-main>教学系部 <i class='subtitle f-fs1 f-fsn'>(用于划分成员工作单位，如：“计算机系”、”数学系”)</i></el-main>
						<el-aside width='120px' class='f-tar'>
						  <el-button size='mini' type='primary' v-on:click='departAddShow = true'>添加教学系部</el-button>
						</el-aside>
					</el-container>
					<el-table size='mini' v-bind:data="departs">
					  <el-table-column prop="collegeName" label="教学系部名称"></el-table-column>
						<el-table-column label="操作" width="100">
							<template slot-scope="scope">
							  <el-button type="text" size='mini' v-on:click='handleDepartEdit(scope.row)'>编辑</el-button>
								<el-button @click="delDepart(scope.row)" type="text" size='mini'>删除</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-dialog :visible.sync="departAddShow" v-bind:show-close='false' class='depart-add'>
					  <el-form :model='formAdd0' ref='formAdd0' v-bind:rules='rule0' label-width='120px' size='mini'>
						  <el-form-item label='教学系部名称' prop='name'>
							  <el-input v-model='formAdd0.name'></el-input>
							</el-form-item>
							<el-form-item>
						  	<el-button type="primary" size='mini' v-on:click='departSave'>确 定</el-button>
							  <el-button @click="departAddShow = false" size='mini'>取 消</el-button>
							</el-form-item>
						</el-form>
					</el-dialog>
					<el-dialog :visible.sync="departEditShow" v-bind:show-close='false' class='depart-edit'>
					  <el-form :model='form0' label-width='80px' size='mini'>
						  <el-form-item label='系部名称'>
							  <el-input v-model='form0.collegeName'></el-input>
							</el-form-item>
							<el-form-item label='成员管理'>
							  <el-table v-bind:data='form0.members'  size='mini'>
								  <el-table-column prop='name' label='姓名'></el-table-column>
									<el-table-column width='120px'>
									  <template slot="header" slot-scope="scope">
										  <el-button type='primary' v-on:click='departMemberShow = true'>添加成员</el-button>
										</template>
									  <template slot-scope='scope'>
										  <el-button type='text' v-on:click='deldepartmem(scope.row.userid)'>删除</el-button>
										</template>
									</el-table-column>
								</el-table>
								<el-pagination class='page f-tac' hide-on-single-page layout="prev, pager, next" :total="total0" v-on:current-change='departmemIndex'></el-pagination>
							</el-form-item>
							<el-form-item>
                <el-button type="primary" size='mini'>确 定</el-button>
								<el-button @click="departEditShow = false" size='mini'>取 消</el-button>
							</el-form-item>
						</el-form>
						<el-dialog :visible.sync="departMemberShow" v-bind:show-close='false' append-to-body class='admin-add-inner'>
							<el-container class='add-header'>
								<el-main>
									<el-checkbox v-bind:indeterminate="teacher.isIndeterminate" v-model="teacher.checkAll" @change="teacherAll" class='check-all'>全选</el-checkbox>
								</el-main>
								<el-aside width='140px'>
									<el-input v-model='teacher.searchWord' size='mini' placeholder='搜索成员'></el-input>
								</el-aside>
							</el-container>
							<el-checkbox-group v-model="teacher.checkeds" @change="teacherChange">
								<el-checkbox v-for="(item,index) in teacher.data" v-bind:label="item.userid" v-bind:key="index" v-if='item.name.indexOf(teacher.searchWord) != -1 && form0.members.filter((member) => {return member.userid == item.userid}).length == 0'>{{item.name}}</el-checkbox>
							</el-checkbox-group>
							<el-row slot="footer">
								<el-col :span='24'>
									<el-button @click="memberClose('departMemberShow')" size='mini'>取 消</el-button>
									<el-button type="primary" size='mini' v-on:click='departmemAdd'>确 定</el-button>
								</el-col>
							</el-row>
						</el-dialog>
					</el-dialog>
				</el-card>
				<el-card shadow='never' class='card'>
				  <el-container slot='header'>
					  <el-main>二级科研团队 <i class='subtitle f-fs1 f-fsn'>(论文发表时填写的团队名称，全称及英文请务必填写准确，将影响成果归属统计)</i></el-main>
						<el-aside width='120px' class='f-tar'>
						  <el-button size='mini' type='primary' v-on:click='teamAddShow = true'>添加科研团队</el-button>
						</el-aside>
					</el-container>
					<el-table size='mini' v-bind:data="teams">
					  <el-table-column prop="name" label="科研名(中)"></el-table-column>
						<el-table-column prop="ename" label="科研名(英)"></el-table-column>
						<el-table-column label="操作" width="100">
							<template slot-scope="scope">
							  <el-button type="text" size='mini' v-on:click='handleTeamEdit'>编辑</el-button>
								<el-button @click="delTeam(scope.row)" type="text" size='mini'>删除</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-dialog :visible.sync="teamAddShow" v-bind:show-close='false' class='depart-add'>
					  <el-form :model='formAdd1' label-width='100px' size='mini'>
						  <el-form-item label='团队名称'>
							  <el-input v-model='formAdd1.name'></el-input>
							</el-form-item>
							<el-form-item label='团队名称(英)'>
							  <el-input v-model='formAdd1.ename'></el-input>
							</el-form-item>
							<el-form-item>
						  	<el-button type="primary" size='mini'>确 定</el-button>
							  <el-button @click="teamAddShow = false" size='mini'>取 消</el-button>
							</el-form-item>
						</el-form>
					</el-dialog>
					<el-dialog :visible.sync="teamEditShow" v-bind:show-close='false' class='depart-edit'>
					  <el-form :model='form1' label-width='100px' size='mini'>
						  <el-form-item label='团队名称'>
							  <el-input v-model='form1.name'></el-input>
							</el-form-item>
							<el-form-item label='团队名称(英)'>
							  <el-input v-model='form1.ename'></el-input>
							</el-form-item>
							<el-form-item label='成员管理'>
							  <el-table v-bind:data='form1.members'  size='mini'>
								  <el-table-column prop='name' label='姓名'></el-table-column>
									<el-table-column width='120px'>
									  <template slot="header" slot-scope="scope">
										  <el-button type='primary' v-on:click='teamMemberShow = true'>添加成员</el-button>
										</template>
									  <template slot-scope='scope'>
										  <el-button type='text'>删除</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-form-item>
							<el-form-item>
                <el-button type="primary" size='mini'>确 定</el-button>
								<el-button @click="teamEditShow = false" size='mini'>取 消</el-button>
							</el-form-item>
						</el-form>
						<el-dialog :visible.sync="teamMemberShow" v-bind:show-close='false' append-to-body class='admin-add-inner'>
							<el-container class='add-header'>
								<el-main>
									<el-checkbox v-bind:indeterminate="teacher.isIndeterminate" v-model="teacher.checkAll" @change="teacherAll" class='check-all'>全选</el-checkbox>
								</el-main>
								<el-aside width='140px'>
									<el-input v-model='teacher.searchWord' size='mini' placeholder='搜索成员'></el-input>
								</el-aside>
							</el-container>
							<el-checkbox-group v-model="teacher.checkeds" @change="teacherChange">
								<el-checkbox v-for="(item,index) in teacher.data" v-bind:label="item.userid" v-bind:key="index" v-if='item.name.indexOf(teacher.searchWord) != -1 && form1.members.filter((member) => {return member.userid == item.userid}).length == 0'>{{item.name}}</el-checkbox>
							</el-checkbox-group>
							<el-row slot="footer">
								<el-col :span='24'>
									<el-button @click="memberClose('teamMemberShow')" size='mini'>取 消</el-button>
									<el-button type="primary" size='mini'>确 定</el-button>
								</el-col>
							</el-row>
						</el-dialog>
					</el-dialog>
				</el-card>
				<el-card shadow='never' class='card'>
				  <el-container slot='header'>
					  <el-main>自定义标签 <i class='subtitle f-fs1 f-fsn'>(例如“千人计划”“长江学者”等，学院可为成员加入标签便于精准筛选成果)</i></el-main>
						<el-aside width='120px' class='f-tar'>
						  <el-button size='mini' type='primary' v-on:click='tagAddShow = true'>添加标签</el-button>
						</el-aside>
					</el-container>
					<el-table size='mini' v-bind:data="tags">
					  <el-table-column prop="tagname" label="标签名称"></el-table-column>
						<el-table-column label="操作" width="100">
							<template slot-scope="scope">
							  <el-button type="text" size='mini' v-on:click='handleTagEdit(scope.row)'>编辑</el-button>
								<el-button @click="delTag(scope.row)" type="text" size='mini'>删除</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-dialog :visible.sync="tagAddShow" v-bind:show-close='false' class='depart-add'>
					  <el-form :model='formAdd2' ref='formAdd2' v-bind:rules='rule2' label-width='100px' size='mini'>
						  <el-form-item label='标签名称' prop='name'>
							  <el-input v-model='formAdd2.name'></el-input>
							</el-form-item>
							<el-form-item>
						  	<el-button type="primary" size='mini' v-on:click='tagSave'>保存</el-button>
							  <el-button @click="tagAddShow = false" size='mini'>取消</el-button>
							</el-form-item>
						</el-form>
					</el-dialog>
					<el-dialog :visible.sync="tagEditShow" v-bind:show-close='false' class='depart-edit'>
					  <el-form :model='form2' ref='form2' v-bind:rules='rule2' label-width='100px' size='mini'>
						  <el-form-item label='标签名称' prop='name'>
							  <el-input v-model='form2.name'></el-input>
							</el-form-item>
							<el-form-item label='成员管理'>
							  <el-table v-bind:data='form2.members'  size='mini'>
								  <el-table-column prop='name' label='姓名'></el-table-column>
									<el-table-column width='120px'>
									  <template slot="header" slot-scope="scope">
										  <el-button type='primary' v-on:click='tagMemberShow = true'>添加成员</el-button>
										</template>
									  <template slot-scope='scope'>
										  <el-button type='text' v-on:click='deltagmem(scope.row)'>删除</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-form-item>
							<el-form-item>
                <el-button type="primary" size='mini' v-on:click='tagUpdate'>确 定</el-button>
								<el-button @click="tagEditShow = false" size='mini'>取 消</el-button>
							</el-form-item>
						</el-form>
						<el-dialog :visible.sync="tagMemberShow" v-bind:show-close='false' append-to-body class='admin-add-inner'>
							<el-container class='add-header'>
								<el-main>
									<el-checkbox v-bind:indeterminate="teacher.isIndeterminate" v-model="teacher.checkAll" @change="teacherAll" class='check-all'>全选</el-checkbox>
								</el-main>
								<el-aside width='140px'>
									<el-input v-model='teacher.searchWord' size='mini' placeholder='搜索成员'></el-input>
								</el-aside>
							</el-container>
							<el-checkbox-group v-model="teacher.checkeds" @change="teacherChange">
								<el-checkbox v-for="(item,index) in teacher.data" v-bind:label="item.userid" v-bind:key="index" v-if='item.name.indexOf(teacher.searchWord) != -1 && form2.members.filter((member) => {return member.userid == item.userid}).length == 0' class='member'>{{item.name}}</el-checkbox>
							</el-checkbox-group>
							<el-row slot="footer">
								<el-col :span='24'>
									<el-button @click="memberClose('tagMemberShow')" size='mini'>取 消</el-button>
									<el-button type="primary" size='mini' v-on:click='tagmemAdd'>确 定</el-button>
								</el-col>
							</el-row>
						</el-dialog>
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
