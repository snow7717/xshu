<template>
  <ccontent ref='ccontent' v-bind:pname='$options.name' v-bind:url='url' v-bind:nameSearch='true' v-bind:search='search' v-bind:selects='selects' v-on:search='index(1)' placeholder='请输入项目名称' v-bind:datas='datas' v-bind:customfield='true' v-bind:page='page' v-bind:total='total' v-bind:formshow='formshow' v-bind:rules='rules' v-bind:form='form' v-bind:labelWidth='labelW' v-on:index='index' v-on:handleDatas='handleDatas' v-on:create='showform({})' v-on:edit='showform' v-on:cancel='cancel'>
		<div slot='table'>
			<el-table-column v-for='(item,index) in fields' v-bind:key='index' v-if='item.show' v-bind:prop='item.keyer' v-bind:label='item.label' v-bind:width='item.width' show-overflow-tooltip></el-table-column>
		</div>
		<div slot='form'>
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
						<el-date-picker v-if='item.tag == "datepicker"' v-model="form[item.keyer]" v-bind:type="item.type" v-bind:placeholder="item.placeholder" v-bind:readonly='item.readonly' v-bind:disabled='item.disabled' v-bind:value-format='item.type == "year" ? "yyyy" : item.type == "month" ? "yyyy-MM" : item.type == "week" ? "yyyy 第 WW 周" : "yyyy-MM-dd"'></el-date-picker>
					</el-form-item>
				</el-col>
			</el-row>
		</div>
	</ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
