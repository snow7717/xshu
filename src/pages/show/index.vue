<template>
  <el-row>
		<el-form size='mini' v-bind:label-width='labelW' class='view-form'>
			<el-col v-for='(item,index) in fields' v-bind:key='index'>
				<el-form-item v-bind:label="item.label" v-bind:prop='item.keyer'>
					<el-input v-if='item.tag == "input"' v-model="form[item.keyer]" v-bind:type='item.type' v-bind:placeholder='item.placeholder' v-bind:disabled='true' v-bind:rows='item.rows' v-bind:autosize='item.autosize' v-bind:max='item.max' v-bind:min='item.min' v-bind:step='item.step'></el-input>
					<el-radio-group v-if='item.tag == "radiogroup"' v-model="form[item.keyer]">
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
									<el-date-picker v-if='item1.tag == "datepicker"' v-model="scope.row[item1.keyer]" v-bind:type="item1.datetype" v-bind:placeholder="item1.placeholder" v-bind:readonly='item1.readonly' v-bind:disabled='true' v-bind:value-format='item1.datetype == "year" ? "yyyy" : item.datetype == "month" ? "yyyy-MM" : item.datetype == "week" ? "yyyy 第 WW 周" : item.datetype == "date" ? "yyyy-MM-dd" : ""'></el-date-picker></el-date-picker>
									<el-upload v-if='item1.tag == "file"' action="#" v-bind:name='item1.keyer' v-bind:disabled='true' v-bind:file-list='scope.row[item.keyer]'>
									</el-upload>
								</el-form-item>
							</template>
						</el-table-column>
					</el-table>
				</el-form-item>
		  </el-col>
		</el-form>
	</el-row>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
