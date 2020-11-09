<template>
  <div class='container'>
	  <cheader class='header'></cheader>
		<el-row>
		  <el-col :span='20' :offset='2'>
			  <cupload ref='upload' v-bind:title='uptitle' v-bind:intro='upintro'></cupload>
				<el-card class='carder'>
				  <header slot="header" class="clearfix">
						<h2 class='upload-title f-ib'>填写信息</h2>
					</header>
					<el-form ref='form' size='mini' class='form' label-width='120px' v-bind:model='form' v-bind:rules='rules'>
						<el-form-item v-for='(item,index) in fields' v-bind:key='index' v-bind:label='item.label' v-bind:required='item.required' v-bind:prop='item.key'>
						  <el-input v-model='form[item.key]' v-if='item.componetType == "input"' v-bind:placeholder='item.placeholder'></el-input>
							<el-input v-model='form[item.key]' v-if='item.componetType == "number"' type='number'></el-input>
							<el-input v-if='item.componetType == "textarea"' type="textarea" v-bind:placeholder="item.placeholder" v-model="form[item.key]"></el-input>
							<el-date-picker v-model="form[item.key]" v-if='item.componetType == "date"' type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
							<el-select v-model='form[item.key]' v-if='item.componetType == "select"' v-bind:multiple='item.multiple'>
							  <el-option v-for='(option, i) in item.opetionsJson'v-bind:key='i' v-bind:label='option.label' v-bind:value='option.value'></el-option>
							</el-select>
							<el-checkbox-group v-if='item.componetType == "checkboxgroup"' v-model="form[item.key]">
								<el-checkbox v-for='(option, i) in item.opetionsJson' v-bind:key='i' v-bind:label="option.label"></el-checkbox>
							</el-checkbox-group>	
							<section v-if='item.componetType == "radiogroup"'>
							  <el-radio v-for='(option, i) in item.opetionsJson' v-bind:key='i' v-model="form[item.key]" v-bind:label="option.value">{{option.label}}</el-radio>
							</section>	
						</el-form-item>
						<el-form-item v-if='type == "1"' label='作者信息'>
						  <el-table v-bind:data='form.authors'>
							  <el-table-column label="排序" width="80">
								  <template slot-scope='scope'>
									  <el-input v-model='scope.row.author_seqn' type='number' min='1'></el-input>
									</template>
								</el-table-column>
								<el-table-column label="姓名" width="100">
								  <template slot-scope='scope'>
									  <el-input v-model='scope.row.author'></el-input>
									</template>
								</el-table-column>
								<el-table-column label="作者身份" width='120'>
								  <template slot-scope='scope'>
									  <el-select v-model='scope.row.author_identity'>
										  <el-option label='老师' value='老师'></el-option>
											<el-option label='博士生' value='博士生'></el-option>
											<el-option label='硕士生' value='硕士生'></el-option>
											<el-option label='本科' value='本科'></el-option>
											<el-option label='其他' value='其他'></el-option>
										</el-select>
									</template>
								</el-table-column>
								<el-table-column label="通讯作者" width='80' align='center'>
								  <template slot-scope='scope'>
									  <el-checkbox v-model="scope.row.corres_yn"></el-checkbox>
									</template>
								</el-table-column>
								<el-table-column label="共同一作" width='80' align='center'>
								  <template slot-scope='scope'>
									  <el-checkbox v-model="scope.row.together_yn"></el-checkbox>
									</template>
								</el-table-column>
								<el-table-column label="单位名称">
								  <template slot-scope='scope'>
									  <el-input type='textarea' v-model='scope.row.units' placeholder='多个单位之间用逗号隔开，如：河北经贸大学商学院，泰安理工大学'></el-input>
									</template>
								</el-table-column>
								<el-table-column label="操作" width='50' align='center'>
								  <template slot-scope='scope'>
									  <i class='el-icon-plus f-csp f-fwb' type='primary' title='添加' v-if='form.authors.indexOf(scope.row) == 0' v-on:click='addAuthor'></i>
										<i class='el-icon-minus f-csp f-fwb' v-else title='删除' v-on:click='removeAuthor(form.authors.indexOf(scope.row))'></i>
									</template>
								</el-table-column>
							</el-table>
						</el-form-item>
						<el-form-item>
						  <el-button type='primary'  @click="submit('form')">保存</el-button>
						</el-form-item>
					</el-form>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>