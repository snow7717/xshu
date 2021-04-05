<template>
	<div>
		<el-container class='search-bar'>
			<el-main class='bar-main'>
				<i class='bar-item0 f-fsn'>{{summary}}({{total}})</i>
				<el-form :model='search' :inline="true" size='small' class='search-name f-ib f-pr' v-if='filterFields.length > 0'>
					<el-form-item v-for='(item,index) in filterFields' v-bind:key='index' v-if='index == 0' v-bind:label='item.tag == "radiogroup" || item.tag == "checkboxgroup" ? item.label : ""'>
					  <el-input v-if='item.tag == "input"' v-model='search[item.keyer]' v-bind:placeholder='item.label'></el-input>
						<el-select v-if='item.tag == "select"' v-model='search[item.keyer]' v-bind:placeholder='item.label' v-bind:filterable='item.filterable' v-bind:allowCreate='item.allowCreate' clearable>
						  <el-option v-for='(option,i) in item.options' v-bind:key='i' v-bind:value='option.value' v-bind:label='option.label'></el-option>
						</el-select>
						<el-radio-group v-if='item.tag == "radiogroup"' v-model="search[item.keyer]">
							<el-radio v-for='(radio,i) in item.options' v-bind:key='i' v-bind:label="radio.value">{{radio.label}}</el-radio>
						</el-radio-group>
						<el-checkbox-group v-if='item.tag == "checkboxgroup"' v-model="search[item.keyer]">
							<el-checkbox v-for='(checkbox,i) in item.options' v-bind:key='i' v-bind:label="checkbox.value">{{checkbox.label}}</el-checkbox>
						</el-checkbox-group>
						<el-date-picker v-if='item.tag == "datepicker"' v-model="search[item.keyer]" v-bind:type="item.datetype" v-bind:placeholder="item.label" v-bind:readonly='item.readonly' v-bind:disabled='item.disabled' v-bind:value-format='item.datetype == "year" ? "yyyy" : item.datetype == "month" ? "yyyy-MM" : item.datetype == "week" ? "yyyy 第 WW 周" : item.datetype == "date" ? "yyyy-MM-dd" : ""'></el-date-picker>
					</el-form-item>
					<el-popover placement="right" width="400" trigger="click" v-model='searchShow' v-if='filterFields.length > 1'>
					  <el-form-item v-for='(item,index) in filterFields' v-bind:key='index' v-if='index > 0' class='query-item' v-bind:label='item.tag == "radiogroup" || item.tag == "checkboxgroup" ? item.label : ""'>
							<el-input v-if='item.tag == "input"' v-model='search[item.keyer]' v-bind:placeholder='item.label'></el-input>
							<el-select v-if='item.tag == "select"' v-model='search[item.keyer]' v-bind:placeholder='item.label' v-bind:filterable='item.filterable' v-bind:allowCreate='item.allowCreate' clearable>
								<el-option v-for='(option,i) in item.options' v-bind:key='i' v-bind:value='option.value' v-bind:label='option.label'></el-option>
							</el-select>
							<el-radio-group v-if='item.tag == "radiogroup"' v-model="search[item.keyer]">
								<el-radio v-for='(radio,i) in item.options' v-bind:key='i' v-bind:label="radio.value">{{radio.label}}</el-radio>
							</el-radio-group>
							<el-checkbox-group v-if='item.tag == "checkboxgroup"' v-model="search[item.keyer]">
								<el-checkbox v-for='(checkbox,i) in item.options' v-bind:key='i' v-bind:label="checkbox.value">{{checkbox.label}}</el-checkbox>
							</el-checkbox-group>
							<el-date-picker v-if='item.tag == "datepicker"' v-model="search[item.keyer]" v-bind:type="item.datetype" v-bind:placeholder="item.label" v-bind:readonly='item.readonly' v-bind:disabled='item.disabled' v-bind:value-format='item.datetype == "year" ? "yyyy" : item.datetype == "month" ? "yyyy-MM" : item.datetype == "week" ? "yyyy 第 WW 周" : item.datetype == "date" ? "yyyy-MM-dd" : ""'></el-date-picker></el-date-picker>
						</el-form-item>
						<el-form-item class='query-item' v-if='hasPerm("approve") || user.role.scope == "个人"'>
						  <el-select v-model='search._status' placeholder='审核状态'>
							  <el-option value='1' label='待审核'></el-option>
								<el-option value='2' label='审核通过'></el-option>
								<el-option value='3' label='审核未通过'></el-option>
							</el-select>
						</el-form-item>
						<el-button type="primary" v-on:click='query' size='mini'>查询</el-button>
						<el-button type="default" size='mini' v-on:click='searchShow = false'>取消</el-button>
						<el-link type="primary" slot="reference">更多晒选项</el-link>
					</el-popover>
					<el-form-item>
						<el-button class='query' type="primary" v-on:click='index(1)'>查询</el-button>
						<el-button class='clear' type='default' v-on:click='clear'>清除</el-button>
					</el-form-item>
				</el-form>
			</el-main>
			<el-aside width='306px' class='aside f-tar'>
				<el-button type='default' size='mini' class='f-ib' v-if='hasPerm("add")' v-on:click='create'>添加</el-button>
				<el-upload v-if='hasPerm("add")' action="#" v-bind:show-file-list='false' list-type="text" v-bind:http-request='importer' accept=".xls,.xlsx" class='import f-ib'>
					<el-button slot='default' type="primary" size='mini'>导入</el-button>
				</el-upload>
				<el-button type="primary" size='mini' class='f-ib' v-on:click='templatedownload'>模版下载</el-button>
				<el-button type="success" size='mini' class='f-ib' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
			</el-aside>
	  </el-container>
    <el-container>
			<el-row>
				<el-col :span='24'>
					<el-table v-bind:data="datas" stripe class='w-100' size='small' @selection-change="handleDatas">
						<el-table-column v-if='selectable' type="selection" fixed width="40"></el-table-column>
						<el-table-column v-for='(item,index) in fields' v-bind:key='index' v-if='item.show' v-bind:prop='item.keyer' v-bind:label='item.label' show-overflow-tooltip></el-table-column>
						<el-table-column fixed="right" label='操作' v-bind:width='operawidth'>
							<template slot-scope='scope'>
								<slot v-bind:data="scope.row"></slot>
								<i v-if='hasPerm("approve") && scope.row.approveable' class='approve f-csp el-icon-document-checked' title='审批通过' v-on:click='approve(scope.row.id,2)'></i>
								<i v-if='hasPerm("approve") && scope.row.approveable' class='approve1 f-csp el-icon-document-delete' title='审批不通过' v-on:click='approve(scope.row.id,3)'></i>
								<i class='view f-csp el-icon-view' v-on:click='view(scope.row.id || scope.row.roleid)' title='查看详情'></i>
								<i v-if='hasPerm("modify") && scope.row.editable' class='edit f-csp el-icon-edit' title='编辑' v-on:click='edit(scope.row.id || scope.row.roleid)'></i>
								<i v-if='hasPerm("del") && scope.row.deleteable' class='delete f-csp el-icon-delete' title='删除' v-on:click='del(scope.row.id || scope.row.roleid)'></i>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
				<el-col :span='24' class='page f-tac'>
					<el-pagination layout="prev, pager, next" v-bind:current-page='page' v-bind:total="total" v-on:current-change='index'></el-pagination>
				</el-col>
			</el-row>
			<el-dialog title="" class='form' :visible.sync="viewshow" v-bind:close-on-click-modal='false'>
			  <el-form size='mini' v-bind:label-width='labelWidth' class='view-form'>
				  <el-row>
					  <el-col v-for='(item,index) in fields' v-bind:key='index' v-bind:span='item.tag == "table" ? 24 : item.span'>
							<el-form-item v-bind:label="item.label">
								<el-input v-if='item.tag == "input"' v-model="form[item.keyer]" v-bind:type='item.type' v-bind:placeholder='item.placeholder' v-bind:disabled='true' v-bind:rows='item.rows' v-bind:autosize='item.autosize' v-bind:max='item.max' v-bind:min='item.min' v-bind:step='item.step'></el-input>
								<el-radio-group v-if='item.tag == "radiogroup"' v-model="form[item.keyer]" v-bind:disabled='true'>
									<el-radio v-for='(radio,i) in item.options' v-bind:key='i' v-bind:label="radio.value">{{radio.label}}</el-radio>
								</el-radio-group>
								<el-checkbox-group v-if='item.tag == "checkboxgroup"' v-model="form[item.keyer]">
									<el-checkbox v-for='(checkbox,i) in item.options' v-bind:key='i' v-bind:label="checkbox.value">{{checkbox.label}}</el-checkbox>
								</el-checkbox-group>
								<el-select v-if='item.tag == "select"' v-model='form[item.keyer]' v-bind:multiple='item.multiple' v-bind:disabled='true' v-bind:placeholder='item.placeholder' v-bind:filterable='item.filterable' v-bind:allowCreate='item.allowCreate'>
									<el-option v-for='(option,i) in item.options' v-bind:key='i' v-bind:label='option.label' v-bind:value='option.value'></el-option>
								</el-select>
								<el-date-picker v-if='item.tag == "datepicker"' v-model="form[item.keyer]" v-bind:type="item.datetype" v-bind:placeholder="item.placeholder" v-bind:readonly='item.readonly' v-bind:disabled='true' v-bind:value-format='item.datetype == "year" ? "yyyy" : item.type == "month" ? "yyyy-MM" : item.type == "week" ? "yyyy 第 WW 周" : "yyyy-MM-dd"'></el-date-picker></el-date-picker>
								<el-upload v-if='item.tag == "file"' action="#" v-bind:name='item.keyer' v-bind:multiple='item.multiple' v-bind:disabled='true' v-bind:file-list='form[item.keyer]'>
								</el-upload>
								<el-table v-if='item.tag == "table"' v-bind:data='form[item.keyer]' class='option-table'>
									<el-table-column v-for='(item1,index1) in item.fields' v-bind:key='index1' v-bind:label="item1.label">
										<template slot-scope='scope'>
											<el-form-item v-bind:prop='item.keyer + "." + scope.$index + "." + item1.keyer' v-bind:rules='rules[item1.keyer]'>
												<el-input v-if='item1.tag == "input"' v-model="scope.row[item1.keyer]" v-bind:type='item1.type' v-bind:placeholder='item1.placeholder' v-bind:disabled='true' v-bind:rows='item1.rows' v-bind:autosize='item1.autosize' v-bind:max='item1.max' v-bind:min='item1.min' v-bind:step='item1.step'></el-input>
												<el-radio-group v-if='item1.tag == "radiogroup"' v-model="scope.row[item1.keyer]">
													<el-radio v-for='(radio,i) in item1.options' v-bind:key='i' v-bind:label="radio.value">{{radio.label}}</el-radio>
												</el-radio-group>
												<el-checkbox-group v-if='item1.tag == "checkboxgroup"' v-model="scope.row[item1.keyer]">
													<el-checkbox v-for='(checkbox,i) in item1.options' v-bind:key='i' v-bind:label="checkbox.value">{{checkbox.label}}</el-checkbox>
												</el-checkbox-group>
												<el-select v-if='item1.tag == "select"' v-model='scope.row[item1.keyer]' v-bind:multiple='item1.multiple' v-bind:disabled='true' v-bind:placeholder='item1.placeholder' v-bind:filterable='item1.filterable' v-bind:allowCreate='item1.allowCreate'>
													<el-option v-for='(option,i) in item1.options' v-bind:key='i' v-bind:label='option.label' v-bind:value='option.value'></el-option>
												</el-select>
												<el-date-picker v-if='item1.tag == "datepicker"' v-model="scope.row[item1.keyer]" v-bind:type="item1.datetype" v-bind:placeholder="item1.placeholder" v-bind:readonly='item1.readonly' v-bind:disabled='true' v-bind:value-format='item1.datetype == "year" ? "yyyy" : item.datetype == "month" ? "yyyy-MM" : item.datetype == "week" ? "yyyy 第 WW 周" : item.datetype == "date" ? "yyyy-MM-dd" : ""'></el-date-picker>
												<el-upload v-if='item1.tag == "file"' action="#" v-bind:name='item1.keyer' v-bind:disabled='true' v-bind:file-list='scope.row[item.keyer]'>
												</el-upload>
											</el-form-item>
										</template>
									</el-table-column>
								</el-table>
							</el-form-item>
						</el-col>
						<el-col :span='12'>
						  <el-form-item label='提交人' class='approve-label'>{{form._submituser}}</el-form-item>
						</el-col>
						<el-col :span='12'>
						  <el-form-item label='审核人' class='approve-label'>{{form._approveuser}}</el-form-item>
						</el-col>
						<el-col :span='24'>
						  <el-form-item v-if='form._status' label='审核状态' class='approve-label'>
								{{form._status == 1 ? '待审核' : form._status == 2 ? '审核通过' : '审核不通过'}}
							</el-form-item>
						</el-col>
						<el-col :span='24'>
						  <el-form-item v-if='form.suggest' label='审核意见' class='approve-label'>{{form.suggest}}</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-dialog>
			<el-dialog title="" class='form' :visible.sync="formshow" v-bind:show-close='false' v-bind:close-on-click-modal='false'>
				<el-form :model="form" v-bind:label-width='labelWidth' size='mini' v-bind:rules="rules" ref="form">
					<el-row>
						<el-col v-for='(item,index) in fields' v-bind:key='index' v-bind:span='item.tag == "table" ? 24 : item.span'>
							<el-form-item v-bind:label="item.label" v-bind:prop='item.keyer'>
								<el-input v-if='item.tag == "input"' v-model="form[item.keyer]" v-bind:type='item.type' v-bind:placeholder='item.placeholder' v-bind:disabled='item.disabled' v-bind:rows='item.rows' v-bind:autosize='item.autosize' v-bind:max='item.max' v-bind:min='item.min' v-bind:step='item.step'></el-input>
								<el-radio-group v-if='item.tag == "radiogroup"' v-model="form[item.keyer]">
									<el-radio v-for='(radio,i) in item.options' v-bind:key='i' v-bind:label="radio.value">{{radio.label}}</el-radio>
								</el-radio-group>
								<el-checkbox-group v-if='item.tag == "checkboxgroup"' v-model="form[item.keyer]">
									<el-checkbox v-for='(checkbox,i) in item.options' v-bind:key='i' v-bind:label="checkbox.value">{{checkbox.label}}</el-checkbox>
								</el-checkbox-group>
								<el-select v-if='item.tag == "select"' v-model='form[item.keyer]' v-bind:multiple='item.multiple' v-bind:disabled='item.disabled' v-bind:placeholder='item.placeholder' v-bind:filterable='item.filterable' v-bind:allowCreate='item.allowCreate' v-on:change='leaderChange($event,item.keyer)'>
									<el-option v-for='(option,i) in item.options' v-bind:key='i' v-bind:label='option.label' v-bind:value='option.value'></el-option>
								</el-select>
								<el-cascader v-if='item.tag == "cascader"' v-model='form[item.keyer]' v-bind:options='item.options'></el-cascader>
								<el-date-picker v-if='item.tag == "datepicker"' v-model="form[item.keyer]" v-bind:type="item.datetype" v-bind:placeholder="item.placeholder" v-bind:readonly='item.readonly' v-bind:disabled='item.disabled' v-bind:value-format='item.datetype == "year" ? "yyyy" : item.type == "month" ? "yyyy-MM" : item.type == "week" ? "yyyy 第 WW 周" : "yyyy-MM-dd"'></el-date-picker>
								<el-upload v-if='item.tag == "file"' action="#" v-bind:http-request='uploader' v-bind:on-remove="(file,files) => fileremove(file,files,item.keyer)" v-bind:name='item.keyer' v-bind:multiple='item.multiple' v-bind:limit="item.limit" v-bind:accept='item.accept.toString()' v-bind:disabled='item.disabled' v-bind:file-list='form[item.keyer]'>
									<el-button size="mini" type="primary">点击上传</el-button>
								</el-upload>
								<el-table v-if='item.tag == "table"' v-bind:data='form[item.keyer]' class='option-table'>
									<el-table-column v-for='(item1,index1) in item.fields' v-bind:key='index1' v-bind:label="item1.label">
										<template slot-scope='scope'>
										  <el-form-item v-bind:prop='item.keyer + "." + scope.$index + "." + item1.keyer' v-bind:rules='rules[item1.keyer]'>
											  <el-input v-if='item1.tag == "input"' v-model="scope.row[item1.keyer]" v-bind:type='item1.type' v-bind:placeholder='item1.placeholder' v-bind:disabled='item1.disabled' v-bind:rows='item1.rows' v-bind:autosize='item1.autosize' v-bind:max='item1.max' v-bind:min='item1.min' v-bind:step='item1.step'></el-input>
												<el-radio-group v-if='item1.tag == "radiogroup"' v-model="scope.row[item1.keyer]">
													<el-radio v-for='(radio,i) in item1.options' v-bind:key='i' v-bind:label="radio.value">{{radio.label}}</el-radio>
												</el-radio-group>
												<el-checkbox-group v-if='item1.tag == "checkboxgroup"' v-model="scope.row[item1.keyer]">
													<el-checkbox v-for='(checkbox,i) in item1.options' v-bind:key='i' v-bind:label="checkbox.value">{{checkbox.label}}</el-checkbox>
												</el-checkbox-group>
												<el-select v-if='item1.tag == "select"' v-model='scope.row[item1.keyer]' v-bind:multiple='item1.multiple' v-bind:disabled='item1.disabled' v-bind:placeholder='item1.placeholder' v-bind:filterable='item1.filterable' v-bind:allowCreate='item1.allowCreate'>
													<el-option v-for='(option,i) in item1.options' v-bind:key='i' v-bind:label='option.label' v-bind:value='option.value'></el-option>
												</el-select>
												<el-cascader v-if='item1.tag == "cascader"' v-model='scope.row[item1.keyer]' v-bind:options='item1.options'></el-cascader>
												<el-date-picker v-if='item1.tag == "datepicker"' v-model="scope.row[item1.keyer]" v-bind:type="item1.datetype" v-bind:placeholder="item1.placeholder" v-bind:readonly='item1.readonly' v-bind:disabled='item1.disabled' v-bind:value-format='item1.datetype == "year" ? "yyyy" : item.datetype == "month" ? "yyyy-MM" : item.datetype == "week" ? "yyyy 第 WW 周" : item.datetype == "date" ? "yyyy-MM-dd" : ""'></el-date-picker>
												<el-upload v-if='item1.tag == "file"' action="#" v-bind:http-request='uploader' v-bind:name='item1.keyer' v-bind:multiple='item1.multiple' v-bind:limit="item1.limit" v-bind:accept='item1.accept.toString()' v-bind:disabled='item1.disabled' v-bind:file-list='scope.row[item.keyer]'>
													<el-button size="mini" type="primary">点击上传</el-button>
												</el-upload>
											</el-form-item>
										</template>
									</el-table-column>
									<el-table-column width='50' align='center'>
										<template slot="header" slot-scope="scope">
											<i class='el-icon-plus f-csp' title='添加' v-on:click='addtable(index)'></i>
										</template>
										<template slot-scope="scope">
											<i class='el-icon-minus f-csp' title='删除' v-on:click='deltable(item.keyer,scope.$index)'></i>
										</template>
									</el-table-column>
								</el-table>
								<section v-if='item.tag == "tree"'>
									<el-input placeholder="输入菜单名进行过滤" v-model="menu" size='mini'></el-input>
									<el-tree class="filter-tree" check-on-click-node node-key='name' v-bind:data="menus" v-bind:props="{children: 'children',label: 'label'}" v-bind:filter-node-method="filterNode" ref="tree" v-bind:show-checkbox='form.delyn' v-on:check='handleChecked'></el-tree>
								</section>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
				<footer slot="footer" class="dialog-footer">
					<el-button @click="cancel" size='mini'>取 消</el-button>
					<el-button type="primary" size='mini' v-on:click='submit("form")' v-bind:disabled='form.delyn == false ? true : false'>确 定</el-button>
				</footer>
			</el-dialog>
		</el-container>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>