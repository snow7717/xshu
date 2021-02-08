<template>
  <ccontent ref='ccontent' v-bind:pname='$options.name' v-bind:summary='`${summary}(${total})`' v-bind:url='url' v-bind:nameSearch='true' v-bind:search='search' v-bind:selects='selects' v-on:search='index(1)' placeholder='请输入学院名' v-bind:datas='datas' v-bind:page='page' v-bind:total='total' v-bind:formshow='formshow' v-bind:rules='rules' v-bind:form='form' v-on:index='index' v-on:handleDatas='handleDatas' v-on:create='create' v-on:edit='edit' v-on:cancel='cancel'>
		<div slot='table'>
			<el-table-column v-for='(item,index) in fields' v-bind:key='index' v-if='item.show' v-bind:prop='item.key' v-bind:label='item.label' show-overflow-tooltip></el-table-column>
		</div>
		<div slot='form'>
		  <el-row>
			  <el-col v-for='(item,index) in fields' v-bind:key='index' v-bind:span='item.span'>
				  <el-form-item v-bind:label="item.label" v-bind:prop='item.key'>
						<el-input v-if='item.tag == "input"' v-model="form[item.key]" v-bind:type='item.type' v-bind:placeholder='item.placeholder' v-bind:disabled='item.disabled' v-bind:rows='item.rows' v-bind:autosize='item.autosize' v-bind:max='item.max' v-bind:min='item.min' v-bind:step='item.step'></el-input>
						<el-radio-group v-if='item.tag == "radiogroup"' v-model="form[item.key]">
							<el-radio v-for='(radio,i) in item.radios' v-bind:key='i' v-bind:label="radio.label">{{radio.text}}</el-radio>
						</el-radio-group>
						<el-checkbox-group v-if='item.tag == "checkboxgroup"' v-model="form[item.key]">
						  <el-checkbox v-for='(checkbox,i) in item.checkboxes' v-bind:key='i' v-bind:label="checkbox.label">{{checkbox.text}}</el-checkbox>
            </el-checkbox-group>
						<el-select v-if='item.tag == "select"' v-model='form[item.key]' v-bind:multiple='item.multiple' v-bind:disabled='item.disabled' v-bind:placeholder='item.placeholder' v-bind:filterable='item.filterable' v-bind:allowCreate='item.allowCreate'>
						  <el-option v-for='(option,i) in item.options' v-bind:key='i' v-bind:label='option.label' v-bind:value='option.value'></el-option>
						</el-select>
						<el-cascader v-if='item.tag == "cascader"' v-model='form[item.key]' v-bind:options='item.options'></el-cascader>
						<el-date-picker v-if='item.tag == "datepicker"' v-model="form[item.key]" v-bind:type="item.type" v-bind:placeholder="item.placeholder" v-bind:readonly='item.readonly' v-bind:disabled='item.disabled' v-bind:format='item.format' v-bind:value-format='item.valueFormat'></el-date-picker>
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
