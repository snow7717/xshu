<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
			<el-main>
			  <ctab v-bind:title='title' v-bind:recycle='recycle' timeLabel='发表时间' timeShow v-bind:ranks='ranks' rankShow v-bind:labelW='labelW' filterShow v-bind:search='search' v-bind:filters='filters' v-on:handleAll='handleAll' v-on:handleChange='handleChange' v-on:query='searcher' v-bind:clearShow='clearShow' v-on:clearSearch='clearSearch' createUrl='/create/1'>
					<el-table slot='first' ref="table" v-bind:data="papers">
						<el-table-column type="selection" width="55"></el-table-column>
						<el-table-column prop='important' label="重要度"></el-table-column>
						<el-table-column prop="title" label="论文信息"></el-table-column>
						<el-table-column prop="rank" label="排名"></el-table-column>
						<el-table-column prop="created_at" label="发表时间"></el-table-column>
						<el-table-column label="操作" width='180'>
							<template slot-scope='scope'>
								<i class='f-csp el-icon-upload' title='导出'></i>
								<i class='f-csp el-icon-download' title='下载'></i>
								<i class='f-csp el-icon-edit' title='编辑'></i>
								<i class='f-csp el-icon-share' title='分享'></i>
								<i class='f-csp el-icon-delete' title='删除'></i>
							</template>
						</el-table-column>
					</el-table>
					<el-pagination slot='first' class='page f-tac' layout="prev, pager, next" :total="50"></el-pagination>
					<el-row slot='second'>
					  <el-col :span='24' class='f-tac' v-if='drafts.length == 0'>
						  <el-image src='http://www.acagrid.com/static/application/src/images/noachieve.png' class='no-data'></el-image>
							<p>平时记得上传成果，做材料才不慌张</p>
							<el-button type='success' size='mini' class='upload' v-on:click='go("/create/1")'>上传成果</el-button>
						</el-col>
					</el-row>
				</ctab>
			</el-main>
		</el-container>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
