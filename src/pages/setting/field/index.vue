<template>
  <el-form v-bind:model='form' ref='form' size='mini' class='form' inline v-bind:style='"max-height:" + (windowH - 101) + "px"'>
	  <el-row class='menu'>
		  <el-col :span='16'>
			  <el-form-item label='选择成果'>
					<el-cascader v-model="form.menu" v-bind:options="menus" v-on:change='menuChange'></el-cascader>
				</el-form-item>
			</el-col>
			<el-col :span='8' class='f-tar'>
				<el-button v-bind:disabled='form.menu.length == 0' type='primary' size='mini' v-on:click='create("none")'>添加字段</el-button>
			</el-col>
		</el-row>
		<el-collapse v-model="actives">
		  <el-collapse-item v-for='(item,index) in form.fields' v-bind:key='index' v-dragging="{ item: item, list: form.fields}" v-bind:name="index" class='field-collapse'>
			  <template slot="title">
					{{item.label}}
					<i class="field-delete el-icon-delete f-csp" title='删除该字段' v-on:click.stop='del(index)'></i>
				</template>
			  <el-row>
				  <el-col :span='8'>
					  <el-form-item label='字段标签' prop='tag' v-bind:prop="'fields.' + index + '.tag'" v-bind:rules='rules.tag'>
							<el-select v-model='item.tag'  v-on:change='(val) => tagChange(val,index)'>
								<el-option v-for='(tag,i) in tags' v-bind:key='i' v-bind:value='tag.value' v-bind:label='tag.label'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"keyer")'>
					  <el-form-item label="字段key" v-bind:prop="'fields.' + index + '.keyer'" v-bind:rules='rules.key'>
							<el-input v-model='item.keyer' clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"label")'>
					  <el-form-item label='字段名称' prop='label' v-bind:prop="'fields.' + index + '.label'" v-bind:rules='rules.label'>
							<el-input v-model='item.label'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"placeholder")'>
					  <el-form-item label='预输入文字' prop='placeholder' v-if='item.tag == "input" || item.tag == "select" || item.tag == "datepicker"'>
							<el-input v-model='item.placeholder'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"type")'>
					  <el-form-item label='输入类型' prop='type'>
							<el-select v-model='item.type'>
								<el-option v-for='(type,i) in inpuTypes' v-bind:key='i' v-bind:value='type.value' v-bind:label='type.label'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"datatype")'>
					  <el-form-item label='日期类型' prop='datatype' v-bind:prop="'fields.' + index + '.datatype'" v-bind:rules='rules.datatype'>
							<el-select v-model='item.datatype'>
								<el-option v-for='(type,i) in dateTypes' v-bind:key='i' v-bind:value='type.value' v-bind:label='type.label'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"disabled")'>
					  <el-form-item label='是否禁用' prop='disabled'>
							<el-radio-group v-model="item.disabled">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"isrequired") && !item.disabled'>
					  <el-form-item label='是否必填' prop='isrequired'>
						  <el-radio-group v-model="item.isrequired">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"rows") && item.type == "textarea"'>
					  <el-form-item label='文本域行高' prop='rows'>
							<el-input type='number' v-bind:min='1' v-model='item.rows'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"autosize") && item.type == "textarea"'>
					  <el-form-item label='自适应高度' prop='autosize'>
							<el-radio-group v-model="item.autosize">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"max") && item.type == "number"'>
					  <el-form-item label='最大值' prop='max'>
							<el-input type='number' v-model='item.max'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"min") && item.type == "number"'>
					  <el-form-item label='最小值' prop='min'>
							<el-input type='number' v-model='item.min'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"step") && item.type == "number"'>
					  <el-form-item label='步进' prop='step'>
							<el-input type='number' v-model='item.step' v-bind:min='1'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"span")'>
					  <el-form-item label='行内跨度' prop='span'>
							<el-select v-model='item.span'>
								<el-option v-for='(span,i) in spans' v-bind:key='i' v-bind:label='span' v-bind:value='span'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"show")'>
					  <el-form-item label='列表展示' prop='show'>
							<el-radio-group v-model="item.show">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"width") && item.show'>
					  <el-form-item label='展示宽度' prop='width'>
							<el-input type='number' v-model='item.width' v-bind:min='1'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"multiple")'>
					  <el-form-item label='是否多选' prop='multiple'>
							<el-radio-group v-model="item.multiple">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"filterable")'>
					  <el-form-item label='支持搜索' prop='filterable'>
							<el-radio-group v-model="item.filterable">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"allowCreate") && item.filterable'>
					  <el-form-item label='允许创建' prop='allowCreate'>
							<el-radio-group v-model="item.allowCreate">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"isfilter") && item.tag != "file"'>
					  <el-form-item prop='isfilter' label='设为筛选项'>
						  <el-radio-group v-model="item.isfilter">
								<el-radio v-bind:label="true">是</el-radio>
								<el-radio v-bind:label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"limit") && item.multiple'>
					  <el-form-item prop='limit' label='最大上传数' v-bind:prop="'fields.' + index + '.limit'" v-bind:rules='rules.limit'>
						  <el-input type='number' v-model='item.limit'></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"accept")'>
					  <el-form-item prop='accept' label='文件类型'>
						  <el-select v-model='item.accept' multiple>
							  <el-option v-for='(option,i) in fileTypes' v-bind:key='i' v-bind:value='option.value' v-bind:label='option.label'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='8' v-if='hasProp(item.tag,"source")'>
					  <el-form-item label='选项来源' prop='source' v-bind:prop="'fields.' + index + '.source'" v-bind:rules='rules.source'>
						  <el-radio-group v-model="item.source" v-on:change='sourceChange($event,index)'>
								<el-radio label="custom">自定义</el-radio>
								<el-radio label="system">系统字段</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span='item.source == "custom" ? 24 : 8'>
					  <el-form-item label='选项' v-if='hasProp(item.tag,"options") && item.source == "custom"' prop='options' v-bind:class='item.source == "custom" ? "select-table" : ""' v-bind:prop="'fields.' + index + '.options'" v-bind:rules='rules.options'>
							<el-table v-bind:data="item.options" size='mini' class='option-table w-100'>
								<el-table-column label="显示文字">
									<template slot-scope="scope">
									  <el-form-item v-bind:prop="'fields.' + index + '.options.' + scope.$index + '.label'" v-bind:rules='rules.optionlabel'>
										  <el-input v-model='scope.row.label'></el-input>
										</el-form-item>
									</template>
								</el-table-column>
								<el-table-column label="保存值">
									<template slot-scope="scope">
									  <el-form-item v-bind:prop="'fields.' + index + '.options.' + scope.$index + '.value'" v-bind:rules='rules.optionvalue'>
										  <el-input v-model='scope.row.value'></el-input>
										</el-form-item>	
									</template>
								</el-table-column>
								<el-table-column label="操作">
									<template slot="header" slot-scope="scope">
										<i class='el-icon-plus f-csp' title='添加' v-on:click='addOption(index)'></i>
									</template>
									<template slot-scope="scope">
										<i class='el-icon-minus f-csp' title='删除' v-if='form.fields[index].options.length > 1' v-on:click='delOption(index,scope.$index)'></i>
									</template>
								</el-table-column>
							</el-table>
						</el-form-item>
						<el-form-item v-if='hasProp(item.tag,"optionsource") && item.source == "system"' label='选择来源' prop='optionsource' v-bind:prop="'fields.' + index + '.optionsource'" v-bind:rules='rules.optionsource'>
						  <el-select v-model='item.optionsource'>
							  <el-option v-for='(option,i) in sources' v-bind:key='i' v-bind:label='option.title' v-bind:value='option.id'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span='24' v-if='hasProp(item.tag,"fields")'>
					  <el-form-item class='field-table-form_item'>
							<el-row class='field-table-label'>
							  <el-col :span='12' class='f-tal'>设置表格字段</el-col>
								<el-col :span='12' class='f-tar'>
								  <el-button type='primary' size='mini' v-on:click='create(index)'>添加</el-button>
								</el-col>
							</el-row>
						  <el-collapse v-model="item.actives">
								<el-collapse-item v-for='(item1,index1) in item.fields' v-bind:key='index1' v-bind:name="index1" class='field-collapse'>
									<template slot="title">
										{{item1.label}}
										<i class="field-delete el-icon-delete f-csp" title='删除该字段' v-on:click.stop='del(index,index1)'></i>
									</template>
									<el-row>
										<el-col :span='8'>
											<el-form-item label='字段标签' prop='tag' v-bind:prop="'fields.' + index + '.fields.' + index1 + '.tag'" v-bind:rules='rules.tag'>
												<el-select v-model='item1.tag'>
													<el-option v-for='(tag,i) in tags' v-bind:key='i' v-if='tag.value != "table"' v-bind:value='tag.value' v-bind:label='tag.label'></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"keyer")'>
											<el-form-item label="字段key" v-bind:prop="'fields.' + index + '.fields.' + index1 + '.keyer'" v-bind:rules='rules.key'>
												<el-input v-model='item1.keyer' clearable></el-input>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"label")'>
											<el-form-item label='字段名称' prop='label' v-bind:prop="'fields.' + index + '.fields.' + index1 + '.label'" v-bind:rules='rules.label'>
												<el-input v-model='item1.label'></el-input>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"placeholder")'>
											<el-form-item label='预输入文字' prop='placeholder' v-if='item1.tag == "input" || item1.tag == "select" || item1.tag == "datepicker"'>
												<el-input v-model='item1.placeholder'></el-input>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"type")'>
											<el-form-item label='输入类型' prop='type'>
												<el-select v-model='item1.type'>
													<el-option v-for='(type,i) in inpuTypes' v-bind:key='i' v-bind:value='type.value' v-bind:label='type.label'></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"datepicker")'>
											<el-form-item label='日期类型' prop='type' v-bind:prop="'fields.' + index + '.fields.' + index1 + '.type'" v-bind:rules='rules.type'>
												<el-select v-model='item1.type'>
													<el-option v-for='(type,i) in dateTypes' v-bind:key='i' v-bind:value='type.value' v-bind:label='type.label'></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"disabled")'>
											<el-form-item label='是否禁用' prop='disabled'>
												<el-radio-group v-model="item1.disabled">
													<el-radio v-bind:label="true">是</el-radio>
													<el-radio v-bind:label="false">否</el-radio>
												</el-radio-group>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"isrequired") && !item1.disabled'>
											<el-form-item label='是否必填' prop='isrequired'>
												<el-radio-group v-model="item1.isrequired">
													<el-radio v-bind:label="true">是</el-radio>
													<el-radio v-bind:label="false">否</el-radio>
												</el-radio-group>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"rows") && item1.type == "textarea"'>
											<el-form-item label='文本域行高' prop='rows'>
												<el-input type='number' v-bind:min='1' v-model='item1.rows'></el-input>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"autosize") && item1.type == "textarea"'>
											<el-form-item label='自适应高度' prop='autosize'>
												<el-radio-group v-model="item1.autosize">
													<el-radio v-bind:label="true">是</el-radio>
													<el-radio v-bind:label="false">否</el-radio>
												</el-radio-group>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"max") && item1.type == "number"'>
											<el-form-item label='最大值' prop='max'>
												<el-input type='number' v-model='item1.max'></el-input>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"min") && item1.type == "number"'>
											<el-form-item label='最小值' prop='min'>
												<el-input type='number' v-model='item1.min'></el-input>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"step") && item1.type == "number"'>
											<el-form-item label='步进' prop='step'>
												<el-input type='number' v-model='item1.step' v-bind:min='1'></el-input>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"multiple")'>
											<el-form-item label='是否多选' prop='multiple'>
												<el-radio-group v-model="item1.multiple">
													<el-radio v-bind:label="true">是</el-radio>
													<el-radio v-bind:label="false">否</el-radio>
												</el-radio-group>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"filterable")'>
											<el-form-item label='支持搜索' prop='filterable'>
												<el-radio-group v-model="item1.filterable">
													<el-radio v-bind:label="true">是</el-radio>
													<el-radio v-bind:label="false">否</el-radio>
												</el-radio-group>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"allowCreate") && item1.filterable'>
											<el-form-item label='允许创建' prop='allowCreate'>
												<el-radio-group v-model="item1.allowCreate">
													<el-radio v-bind:label="true">是</el-radio>
													<el-radio v-bind:label="false">否</el-radio>
												</el-radio-group>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"limit") && item1.multiple'>
											<el-form-item prop='limit' label='最大上传数' v-bind:prop="'fields.' + index + '.fields.' + index1 + '.limit'" v-bind:rules='rules.limit'>
												<el-input type='number' v-model='item1.limit'></el-input>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"accept")'>
											<el-form-item prop='accept' label='文件类型'>
												<el-select v-model='item1.accept' multiple>
													<el-option v-for='(option,i) in fileTypes' v-bind:key='i' v-bind:value='option.value' v-bind:label='option.label'></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span='8' v-if='hasProp(item1.tag,"source")'>
											<el-form-item label='选项来源' prop='source' v-bind:prop="'fields.' + index + '.fields.' + index1 + '.source'" v-bind:rules='rules.source'>
												<el-radio-group v-model="item1.source" v-on:change='sourceChange1($event,index,index1)'>
													<el-radio label="custom">自定义</el-radio>
													<el-radio label="system">系统字段</el-radio>
												</el-radio-group>
											</el-form-item>
										</el-col>
										<el-col :span='item1.source == "custom" ? 24 : 8'>
											<el-form-item label='选项' v-if='hasProp(item1.tag,"options") && item1.source == "custom"' prop='options' v-bind:class='item1.source == "custom" ? "select-table" : ""' v-bind:prop="'fields.' + index + '.fields.' + index1 + '.options'" v-bind:rules='rules.options'>
												<el-table v-bind:data="item1.options" size='mini' class='option-table w-100'>
													<el-table-column label="显示文字">
														<template slot-scope="scope">
															<el-form-item v-bind:prop="'fields.' + index + '.fields.' + index1 + '.options.' + scope.$index + '.label'"  v-bind:rules='rules.optionlabel'>
																<el-input v-model='scope.row.label'></el-input>
															</el-form-item>
														</template>
													</el-table-column>
													<el-table-column label="保存值">
														<template slot-scope="scope">
															<el-form-item v-bind:prop="'fields.' + index + '.fields.' + index1 + '.options.' + scope.$index + '.value'" v-bind:rules='rules.optionvalue'>
																<el-input v-model='scope.row.value'></el-input>
															</el-form-item>	
														</template>
													</el-table-column>
													<el-table-column label="操作">
														<template slot="header" slot-scope="scope">
															<i class='el-icon-plus f-csp' title='添加' v-on:click='addOption(index,index1)'></i>
														</template>
														<template slot-scope="scope">
															<i class='el-icon-minus f-csp' title='删除' v-if='form.fields[index].fields[index1].options.length > 1' v-on:click='delOption1(index,index1,scope.$index)'></i>
														</template>
													</el-table-column>
												</el-table>
											</el-form-item>
											<el-form-item v-if='hasProp(item1.tag,"optionsource") && item1.source == "system"' label='选择来源' prop='optionsource' v-bind:prop="'fields.' + index + '.fields.' + index1 + '.optionsource'" v-bind:rules='rules.optionsource'>
												<el-select v-model='item1.optionsource'>
													<el-option v-for='(option,i) in sources' v-bind:key='i' v-bind:label='option.title' v-bind:value='option.id'></el-option>
												</el-select>
											</el-form-item>
										</el-col>
									</el-row>
								</el-collapse-item>
							</el-collapse>
						</el-form-item>
					</el-col>
				</el-row>
			</el-collapse-item>
		</el-collapse>
		<el-form-item class=''>
		  <el-button type='primary' class='submit' v-on:click='submit("form")' v-bind:disabled='form.fields.length == 0'>提交</el-button>
		</el-form-item>
	</el-form>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
