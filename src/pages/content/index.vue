<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside v-bind:active='active'></caside>
			<el-main class='result-main'>
			  <ccontent ref='ccontent' v-bind:pname='$options.name' v-bind:summary='`${summary}(${total})`' v-bind:url='url' v-bind:nameSearch='true' v-bind:search='search' v-on:search='index(1)' placeholder='请输入角色名' v-bind:importshow='false' v-bind:exportshow='false' v-bind:datas='datas' v-bind:selectable='false' v-bind:operawidth='operawidth' v-bind:page='page' v-bind:total='total' v-bind:formshow='formshow' v-bind:rules='rules' v-bind:form='form' v-on:index='index' v-on:create='showform({permissions: [],delyn: true})' v-on:edit='showform' v-on:cancel='cancel'>
					<div slot='table' class='f-tal'>
						<el-table-column label='权限范围' show-overflow-tooltip prop='scope'></el-table-column>
						<el-table-column label='角色状态' show-overflow-tooltip width='200px'>
							<template slot-scope='scope'>
								{{scope.row.useYn ? '已启用' : '已关闭'}}
							</template>
						</el-table-column>
						<el-table-column prop="title" label="角色名称" show-overflow-tooltip width='260px'></el-table-column>
					</div>
					<div slot='form'>
						<el-form-item label='角色名称' prop='title'>
							<el-input v-model='form.title' v-bind:readonly='form.delyn == false'></el-input>
						</el-form-item>
						<el-form-item label='角色状态' prop='useYn'>
							<el-radio-group v-model="form.useYn" v-bind:disabled='form.delyn == false'>
								<el-radio v-bind:label="true">启用</el-radio>
								<el-radio v-bind:label="false">关闭</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label='权限范围' prop='scope'>
							<el-select v-model='form.scope' v-bind:disabled='form.delyn == false'>
								<el-option value='全院' label='全院'></el-option>
								<el-option value='个人' label='个人'></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label='菜单权限'>
							<el-input placeholder="输入菜单名进行过滤" v-model="menu" size='mini'></el-input>
							<el-tree class="filter-tree" check-on-click-node node-key='name' v-bind:data="menus" v-bind:props="props" v-bind:filter-node-method="filterNode" ref="tree" v-bind:show-checkbox='form.delyn' v-on:check='handleChecked'></el-tree>
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
