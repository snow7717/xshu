<template>
  <el-form :model='form' size='mini' ref='form' v-bind:rules='rules' label-width='110px' class='form'>
		<el-form-item v-for='(item,index) in fields' v-bind:key='index' v-bind:label="item.label" v-bind:prop='item.keyer'>
			<el-input v-if='item.tag == "input"' v-model="form[item.keyer]" v-bind:type='item.type' v-bind:placeholder='item.placeholder' v-bind:disabled='item.disabeld' v-bind:rows='item.rows' v-bind:autosize='item.autosize' v-bind:max='item.max' v-bind:min='item.min' v-bind:step='item.step'></el-input>
			<el-radio-group v-if='item.tag == "radiogroup"' v-model="form[item.keyer]" v-bind:disabled='item.disabled'>
				<el-radio v-for='(radio,i) in item.options' v-bind:key='i' v-bind:label="radio.value">{{radio.label}}</el-radio>
			</el-radio-group>
			<el-checkbox-group v-if='item.tag == "checkboxgroup"' v-model="form[item.keyer]">
				<el-checkbox v-for='(checkbox,i) in item.options' v-bind:key='i' v-bind:label="checkbox.value">{{checkbox.label}}</el-checkbox>
			</el-checkbox-group>
			<el-select v-if='item.tag == "select"' v-model='form[item.keyer]' v-bind:multiple='item.multiple' v-bind:disabled='item.disabled' v-bind:placeholder='item.placeholder' v-bind:filterable='item.filterable' v-bind:allowCreate='item.allowCreate'>
				<el-option v-for='(option,i) in item.options' v-bind:key='i' v-bind:label='option.label' v-bind:value='option.value'></el-option>
			</el-select>
			<el-date-picker v-if='item.tag == "datepicker"' v-model="form[item.keyer]" v-bind:type="item.datetype" v-bind:placeholder="item.placeholder" v-bind:readonly='item.readonly' v-bind:disabled='item.disabled' v-bind:value-format='item.datetype == "year" ? "yyyy" : item.type == "month" ? "yyyy-MM" : item.type == "week" ? "yyyy 第 WW 周" : "yyyy-MM-dd"'></el-date-picker></el-date-picker>
		</el-form-item>
		<el-form-item>
			<el-button type='primary' v-on:click='submit("form")'>保存</el-button>
		</el-form-item>
	</el-form>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
