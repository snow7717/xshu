<template>
	<div>
		<el-container class='search-bar'>
			<el-main class='bar-main'>
				<i class='bar-item0 f-fsn'>{{summary}}({{total}})</i>
				<el-form :inline="true" size='small' class='search-name f-ib f-pr'>
					<el-form-item v-for='(item,index) in fields' v-bind:key='index' v-if='item.isfilter'>
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
						<el-date-picker v-if='item.tag == "datepicker"' v-model="search[item.keyer]" v-bind:type="item.type" v-bind:placeholder="item.placeholder" v-bind:readonly='item.readonly' v-bind:disabled='item.disabled' v-bind:value-format='item.type == "year" ? "yyyy" : item.type == "month" ? "yyyy-MM" : item.type == "week" ? "yyyy 第 WW 周" : item.type == "date" ? "yyyy-MM-dd" : ""'></el-date-picker></el-date-picker>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click='index(1)'>查询</el-button>
					</el-form-item>
				</el-form>
			</el-main>
			<el-aside width='220px' class='aside f-tar'>
				<el-button type='default' size='mini' class='f-ib' v-if='hasPerm("add")' v-on:click='create'>添加</el-button>
				<el-upload v-if='hasPerm("add")' action="#" v-bind:show-file-list='false' list-type="text" v-bind:http-request='importer' accept=".xls,.xlsx" class='import f-ib'>
					<el-button slot='default' type="primary" size='mini'>导入</el-button>
				</el-upload>	
				<el-button type="success" size='mini' class='export f-ib' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
			</el-aside>
	  </el-container>
    <el-container>
			<el-row>
				<el-col :span='24'>
					<el-table v-bind:data="datas" stripe class='w-100' size='small' @selection-change="handleDatas">
						<el-table-column v-if='selectable' type="selection" fixed width="40"></el-table-column>
						<el-table-column v-for='(item,index) in fields' v-bind:key='index' v-if='item.show' v-bind:prop='item.keyer' v-bind:label='item.label' v-bind:width='item.width' show-overflow-tooltip></el-table-column>
						<el-table-column fixed="right" label='操作' v-bind:width='operawidth'>
							<template slot-scope='scope'>
								<slot v-bind:data="scope.row"></slot>
								<i v-if='hasPerm("approve")' class='approve f-csp el-icon-s-check' title='审批'></i>
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
			<el-dialog title="" class='form' :visible.sync="formshow" v-bind:show-close='false' v-bind:close-on-click-modal='false'>
				<el-form :model="form" v-bind:label-width='labelWidth' size='mini' v-bind:rules="rules" ref="form">
					<el-row>
						<el-col v-for='(item,index) in fields' v-bind:key='index' v-bind:span='item.span'>
							<el-form-item v-bind:label="item.label" v-bind:prop='item.keyer'>
								<el-input v-if='item.tag == "input"' v-model="form[item.keyer]" v-bind:type='item.type' v-bind:placeholder='item.placeholder' v-bind:disabled='item.disabled' v-bind:rows='item.rows' v-bind:autosize='item.autosize' v-bind:max='item.max' v-bind:min='item.min' v-bind:step='item.step'></el-input>
								<el-radio-group v-if='item.tag == "radiogroup"' v-model="form[item.keyer]">
									<el-radio v-for='(radio,i) in item.options' v-bind:key='i' v-bind:label="radio.value">{{radio.label}}</el-radio>
								</el-radio-group>
								<el-checkbox-group v-if='item.tag == "checkboxgroup"' v-model="form[item.keyer]">
									<el-checkbox v-for='(checkbox,i) in item.options' v-bind:key='i' v-bind:label="checkbox.value">{{checkbox.label}}</el-checkbox>
								</el-checkbox-group>
								<el-select v-if='item.tag == "select"' v-model='form[item.keyer]' v-bind:multiple='item.multiple' v-bind:disabled='item.disabled' v-bind:placeholder='item.placeholder' v-bind:filterable='item.filterable' v-bind:allowCreate='item.allowCreate'>
									<el-option v-for='(option,i) in item.options' v-bind:key='i' v-bind:label='option.label' v-bind:value='option.value'></el-option>
								</el-select>
								<el-cascader v-if='item.tag == "cascader"' v-model='form[item.keyer]' v-bind:options='item.options'></el-cascader>
								<el-date-picker v-if='item.tag == "datepicker"' v-model="form[item.keyer]" v-bind:type="item.type" v-bind:placeholder="item.placeholder" v-bind:readonly='item.readonly' v-bind:disabled='item.disabled' v-bind:value-format='item.type == "year" ? "yyyy" : item.type == "month" ? "yyyy-MM" : item.type == "week" ? "yyyy 第 WW 周" : "yyyy-MM-dd"'></el-date-picker></el-date-picker>
								<el-upload v-if='item.tag == "file"' action="#" v-bind:http-request='uploader' v-bind:name='item.keyer' v-bind:multiple='item.multiple' v-bind:limit="item.limit" v-bind:accept='item.accept' v-bind:disabled='item.disabled' v-bind:file-list='form[item.keyer]'>
									<el-button size="mini" type="primary">点击上传</el-button>
								</el-upload>
							</el-form-item>
								
						</el-col>
						<slot name='special'></slot>
					</el-row>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="cancel" size='mini'>取 消</el-button>
					<el-button type="primary" size='mini' v-on:click='submit("form")' v-bind:disabled='form.delyn == false ? true : false'>确 定</el-button>
				</div>
			</el-dialog>
		</el-container>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>