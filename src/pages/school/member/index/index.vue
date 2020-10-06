<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='1'></caside>
			<el-main>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)'>
				  <div slot='fields' class='f-ib'>
						<el-popover width="300" trigger="click" class='bar-item' placement='bottom-start' v-if='!nameSearch'>
							<i class='f-fsn f-csp' slot="reference" ref='statusTriggle'>
								<font>状态：{{status.checkAll ? '全部' : '已选择'}}</font>
								<i class='el-icon-caret-bottom'></i>
							</i>
							<el-checkbox :indeterminate="status.isIndeterminate" v-model="status.checkAll" @change="handleAllStatus" class='popover-header'>全选</el-checkbox>
							<el-checkbox-group v-model="search.status" @change="handleStatus">
								<el-checkbox v-for="(item,index) in status.data" :label="item" :key="item" checked>{{item}}</el-checkbox>
							</el-checkbox-group>
							<el-button size='mini' type='primary' class='popover-btn' v-on:click='query("statusTriggle")'>确定</el-button>
						</el-popover>
						<cmemsearch v-bind:search='search' v-on:search='index(1)' v-if='!nameSearch'></cmemsearch>
						<i class='bar-item f-fsn f-csp' v-if='!nameSearch' ref='ageTriggle'>
							<font>年龄：</font>
							<el-select v-model="search.age" placeholder="请选择" size='mini' class='age' v-on:change='index(1)'>
								<el-option v-for="(item,index) in ages" v-bind:key="index" v-bind:label="item.label" v-bind:value="item.value"></el-option>
							</el-select>
						</i>
					</div>
					<el-aside width='240px' slot='aside'>
					  <el-button type="primary" size='mini' v-on:click='go("/member/import")'>批量导入成员</el-button>
						<el-dropdown split-button type="success" size='mini'>
						  <i v-on:click='importer("excel")'>导出excel</i>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>导出word</el-dropdown-item>
								<el-dropdown-item>导出pdf</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-aside>
				</csearch>
				<el-table v-bind:data="members" stripe class='w-100' size='small'>
					<el-table-column fixed label="姓名" width='80px'>
					  <template slot-scope="scope">
							<el-popover placement="bottom-start" width="150px" trigger="hover">
								<font slot="reference">{{scope.row.name}}</font>
								<el-button type="danger" size='mini' v-on:click='del(scope.row)'>移除团队</el-button>
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column sortable v-bind:sort-method='agesort' prop="age" label="年龄" width='80px'></el-table-column>
					<el-table-column prop="jobtitle" label="职称" width='80px'></el-table-column>
					<el-table-column label="职位" width='160px'>
					  <template slot-scope="scope">
						  <el-select v-model="scope.row.job" placeholder="请选择" size='mini' class='job' v-on:change='edit(scope.row,"savePosition")'>
								<el-option v-for="(item,index) in jobs" v-bind:key='index' v-bind:label="item" v-bind:value="item"></el-option>
						  </el-select>	
						</template>
					</el-table-column>
					<el-table-column label="状态" width='100px'>
					  <template slot-scope="scope">
						  <el-select v-model="scope.row.status" placeholder="请选择" size='mini' class='status' v-on:change='edit(scope.row,"saveJobtype")'>
								<el-option v-for="(item,index) in status.data" v-bind:key='index' v-bind:label="item" v-bind:value="item"></el-option>
						  </el-select>
						</template>
					</el-table-column>
					<el-table-column prop='bachelor' label="最高学位" width='120px'></el-table-column>
					<el-table-column label="系部" width='130px'>
					  <template slot-scope="scope">
						  <el-select v-model="scope.row.department" placeholder="请选择" size='mini' class='status' v-on:change='edit(scope.row,"saveCollege")'>
								<el-option v-for="(item,index) in departments" v-bind:key='index' v-bind:label="item.collegeName" v-bind:value="item.id"></el-option>
						  </el-select>
						</template>
					</el-table-column>
					<el-table-column label="标签" width='210px'>
					  <template slot-scope='scope'>
						  <el-select v-model="scope.row.tags" multiple collapse-tags placeholder="请选择" size='mini' v-on:change='edit(scope.row,"saveTags")'>
								<el-option v-for="(item,index) in tags" v-bind:key="index" v-bind:label="item.tagname" v-bind:value="item.id"></el-option>
							</el-select>
						</template>
					</el-table-column>
					<el-table-column sortable v-bind:sort-method='phonesort' prop="phone" label='电话' width='120px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='johnsort' prop="jointime" label='加入团队时间' width='140px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='papersort' prop="paper" label='论文' width='80px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='subjectYsort' prop="subjectY" label='纵向课题' width='100px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='softbooksort' prop="softbook" label='软件著作权' width='120px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='patentsort' prop="patent" label='专利' width='80px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='awardsort' prop="awards" label='个人获奖' width='120px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='sawardsort' prop="sawards" label='学生获奖' width='120px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='conedusort' prop="conedu" label='继续教育材料' width='130px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='booksort' prop="book" label='著作' width='80px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='subjectXsort' prop="subjectX" label='横向课题' width='100px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='newsort' prop="news" label='新闻报道' width='100px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='filesort' prop="file" label='档案资料' width='100px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='othersort' prop="other" label='其他' width='80px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='newresultsort' prop="newresult" label='新型成果' width='100px'></el-table-column>
				</el-table>
				<el-row class='page'>
				  <el-col :span='24' class='f-tac'>
					  <el-pagination layout="prev, pager, next" v-bind:total="total"  v-on:current-change='index'></el-pagination>
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
