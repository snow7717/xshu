<template>
  <el-form v-model='form' size='mini' class='form' inline label->
	  <el-form-item label='选择菜单'>
		  <el-cascader v-model="form.menu" v-bind:options="menus"></el-cascader>
		</el-form-item>
		<el-collapse v-model="actives">
		  <el-collapse-item v-for='(item,index) in fields' v-bind:key='index' v-bind:title="item.label" v-bind:name="item.key" class='field-collapse'>
			  <el-row>
				  <el-col :span='8'>
					  <el-form-item label='字段标签' prop='tag'>
							<el-select v-model='item.tag' v-on:change='(val) => typeChange(val,index)'>
								<el-option v-for='(tag,i) in tags' v-bind:key='i' v-bind:value='tag.value' v-bind:label='tag.label'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label="字段key" prop='key'>
							<el-input v-model='item.key'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='字段名称' prop='label'>
							<el-input v-model='item.label'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='预输入文字' prop='placeholder'>
							<el-input v-model='item.placeholder'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='输入类型' prop='type' v-if='item.tag == "input"'>
							<el-select v-model='item.type'>
								<el-option v-for='(type,i) in inpuTypes' v-bind:key='i' v-bind:value='type.value' v-bind:label='type.label'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='日期类型' prop='type' v-if='item.tag == "datepicker"'>
							<el-select v-model='item.type'>
								<el-option v-for='(type,i) in dateTypes' v-bind:key='i' v-bind:value='type.value' v-bind:label='type.label'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='是否禁用' prop='disabled'>
							<el-radio-group v-model="item.disabled">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='文本域行高' prop='rows' v-if='item.tag == "input" && item.type == "textarea"'>
							<el-input type='number' v-bind:min='1' v-model='item.rows'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='自适应高度' prop='autosize' v-if='item.tag == "input" && item.type == "textarea"'>
							<el-radio-group v-model="item.autosize">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='最大值' prop='max' v-if='item.tag == "input" && item.type == "number"'>
							<el-input type='number' v-model='item.max'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='最小值' prop='min' v-if='item.tag == "input" && item.type == "number"'>
							<el-input type='number' v-model='item.min'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='步进' prop='step' v-if='item.tag == "input" && item.type == "number"'>
							<el-input type='number' v-model='item.step' v-bind:min='1'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='行内跨度' prop='span'>
							<el-select v-model='item.span'>
								<el-option v-for='(span,i) in spans' v-bind:key='i' v-bind:label='span' v-bind:value='span'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='列表展示' prop='show'>
							<el-radio-group v-model="item.show">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='展示顺序' prop='showOrder' v-if='item.show'>
							<el-input type='number' v-model='item.showOrder' v-bind:min='1'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='展示宽度' prop='width' v-if='item.show'>
							<el-input type='number' v-model='item.width' v-bind:min='1'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='是否多选' prop='multiple' v-if='item.tag == "select"'>
							<el-radio-group v-model="item.multiple">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='支持搜索' prop='filterable' v-if='item.tag == "select"'>
							<el-radio-group v-model="item.filterable">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8'>
					  <el-form-item label='允许创建' prop='allowCreate' v-if='item.tag == "select" && item.filterable'>
							<el-radio-group v-model="item.allowCreate">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='24'>
					  <el-form-item label='选项' prop='options' v-if='item.tag == "select" || item.tag == "radiogroup" || item.tag == "checkboxgroup"' class='select-table'>
							<el-table v-bind:data="item.options" size='mini' class='w-100'>
								<el-table-column label="显示文字">
									<template slot-scope="scope">
										<el-input v-model='scope.row.label'></el-input>
									</template>
								</el-table-column>
								<el-table-column label="保存值">
									<template slot-scope="scope">
										<el-input v-model='scope.row.value'></el-input>
									</template>
								</el-table-column>
								<el-table-column label="操作">
									<template slot="header" slot-scope="scope">
										<i class='el-icon-plus f-csp' title='添加' v-on:click='addOption(index)'></i>
									</template>
									<template slot-scope="scope">
										<i class='el-icon-minus f-csp' title='删除' v-if='fields[index].options.length > 1' v-on:click='delOption(index,scope.$index)'></i>
									</template>
								</el-table-column>
							</el-table>
						</el-form-item>
					</el-col>
				</el-row>
			</el-collapse-item>
		</el-collapse>
	</el-form>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
