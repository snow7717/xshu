<template>
  <div class='container'>
	  <cheader></cheader>
		<el-row>
		  <el-col :span='20' :offset='2'>
			  <cupload v-bind:title='uptitle' v-bind:intro='upintro'></cupload>
				<el-card class='carder'>
				  <header slot="header" class="clearfix">
						<h2 class='upload-title f-ib'>填写信息</h2>
					</header>
					<el-form ref='form' size='mini' class='form' label-width='100px' v-bind:model='form' v-bind:rules='rules'>
						<el-form-item label='论文名' required prop='name'>
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label='论文类型' required prop='type'>
						  <el-select v-model='form.type'>
							  <el-option label='期刊论文' value='期刊论文'></el-option>
								<el-option label='会议论文集' value='会议论文集'></el-option>
								<el-option label='报纸' value='报纸'></el-option>
								<el-option label='学位论文' value='学位论文'></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label='论文领域'>
						  <el-select v-model='form.field'>
							  <el-option label='科研(社科)' value='科研(社科)'></el-option>
								<el-option label='科研(自科)' value='科研(自科)'></el-option>
								<el-option label='教育' value='教育'></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label='本人排名' required prop='rank'>
						  <el-input type='number' v-model='form.rank'></el-input>
						</el-form-item>
						<el-form-item label='独著'>
						  <el-radio v-model="form.single" v-bind:label="true">是</el-radio>
              <el-radio v-model="form.single" v-bind:label="false">否</el-radio>
						</el-form-item>
						<el-form-item label='刊物名称' required prop='book'>
						  <el-input v-model='form.book'></el-input>
						</el-form-item>
						<el-form-item label='收录检索'>
						  <el-checkbox-group v-model="form.record">
								<el-checkbox label="sci"></el-checkbox>
								<el-checkbox label="scie"></el-checkbox>
								<el-checkbox label="ssci"></el-checkbox>
								<el-checkbox label="esci"></el-checkbox>
								<el-checkbox label="自然指数杂志"></el-checkbox>
								<el-checkbox label="cssci"></el-checkbox>
								<el-checkbox label="cssci扩展版"></el-checkbox>
								<el-checkbox label="cscd-c"></el-checkbox>
								<el-checkbox label="cscd-e"></el-checkbox>
								<el-checkbox label="scd"></el-checkbox>
								<el-checkbox label="ahci"></el-checkbox>
								<el-checkbox label="ei"></el-checkbox>
								<el-checkbox label="cpci-s"></el-checkbox>
								<el-checkbox label="cpci-ssh"></el-checkbox>
								<el-checkbox label="pku"></el-checkbox>
								<el-checkbox label="科技核心"></el-checkbox>
								<el-checkbox label="国家级期刊"></el-checkbox>
								<el-checkbox label="省级期刊"></el-checkbox>
								<el-checkbox label="校内核心"></el-checkbox>
								<el-checkbox label="会议论文"></el-checkbox>
								<el-checkbox label="其他"></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label='发表时间' required prop='created_at'>
						  <el-date-picker v-model="form.created_at" type="date" placeholder="选择日期"></el-date-picker>
						</el-form-item>
						<el-form-item label='DOI号'>
						  <el-input v-model='form.doi'></el-input>
						</el-form-item>
						<el-form-item label='引用次数'>
						  <el-input v-model='form.quote'></el-input>
						</el-form-item>
						<el-form-item label='关键词'>
						  <el-input v-model='form.keyword'></el-input>
						</el-form-item>
						<el-form-item label='起止页码'>
						  <el-input v-model='form.page' placeholder='如：1-10'></el-input>
						</el-form-item>
						<el-form-item label='关联课题'>
						  <el-input v-model='form.subject'></el-input>
						</el-form-item>
						<el-form-item label='作者信息'>
						  <el-table v-bind:data='form.authors'>
							  <el-table-column label="排序" width="80">
								  <template slot-scope='scope'>
									  <el-input v-model='scope.row.rank' type='number' min='1'></el-input>
									</template>
								</el-table-column>
								<el-table-column label="姓名" width="100">
								  <template slot-scope='scope'>
									  <el-input v-model='scope.row.name'></el-input>
									</template>
								</el-table-column>
								<el-table-column label="作者身份" width='120'>
								  <template slot-scope='scope'>
									  <el-select v-model='scope.row.identity'>
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
									  <el-checkbox v-model="scope.row.coAuthor"></el-checkbox>
									</template>
								</el-table-column>
								<el-table-column label="共同一作" width='80' align='center'>
								  <template slot-scope='scope'>
									  <el-checkbox v-model="scope.row.together"></el-checkbox>
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
						<el-form-item label='成果同步'>
						  <template slot-scope='scope'>
							  <el-radio v-model="form.sync" label="已加入单位">已加入单位</el-radio>
              	<el-radio v-model="form.sync" label="个人私有">个人私有</el-radio>
							</template>
						</el-form-item>
						<el-form-item label='影响因子'>
						  <el-input v-model='form.effect'></el-input>
						</el-form-item>
						<el-form-item label='卷号'>
						  <el-input v-model='form.volumn'></el-input>
						</el-form-item>
						<el-form-item label='期号'>
						  <el-input v-model='form.issue'></el-input>
						</el-form-item>
						<el-form-item label='CN号'>
						  <el-input v-model='form.cn'></el-input>
						</el-form-item>
						<el-form-item label='摘要'>
						  <el-input v-model='form.abstract'></el-input>
						</el-form-item>
						<el-form-item label='备注信息'>
						  <el-input v-model='form.remark' type='textarea'></el-input>
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