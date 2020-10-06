<template>
  <el-tabs v-model="active" type="card">
    <el-tab-pane v-bind:label="title" name="first">
		  <el-container>
			  <el-main class='search-main'>
				  <i class='bar-item f-fsn f-csp' ref='timeTriggle' v-show='timeShow'>
						<font class='f-fs2'>{{timeLabel}}：</font>
						<el-select v-model="search.time" placeholder="请选择" size='mini' class='time'>
							<el-option label="全部" value="全部"></el-option>
							<el-option label="本年度" value="本年度"></el-option>
							<el-option label="近两年" value="近两年"></el-option>
							<el-option label="近三年" value="近三年"></el-option>
							<el-option label="近四年" value="近四年"></el-option>
							<el-option label="近五年" value="近五年"></el-option>
						</el-select>
					</i>
					<i class='bar-item f-fsn f-csp' ref='rankTriggle' v-show='rankShow'>
						<font class='f-fs2'>本人排名：</font>
						<el-select v-model="search.rank" placeholder="请选择" size='mini' class='rank'>
						  <el-option v-for='(item, index) in ranks' v-bind:key='index' v-bind:label='item' v-bind:value='item'></el-option>
						</el-select>
					</i>
					<el-popover width="400" trigger="click" class='bar-item' placement='bottom'>
						<i class='bar-item f-fsn f-csp' slot="reference" ref='filterTriggle'>
							<font class='f-fs2'>高级筛选</font>
							<i class='el-icon-caret-bottom'></i>
						</i>
						<el-form size='mini' v-bind:label-width='labelW' class='filter-form'>
							<el-form-item v-for='(item,i) in filters' v-bind:key='i' v-bind:label='item.label'>
								<el-checkbox v-bind:indeterminate="item.isIndeterminate" v-model="item.checkAll" @change="handleAll($event,item.field)" class='check-all'>全选</el-checkbox>
								<el-checkbox-group v-model="search[item.field]" @change="handleChange($event,item.field)">
									<el-checkbox v-for="(itemer,index) in item.data" v-bind:label="itemer" v-bind:key="index" class='check-item'>{{itemer}}</el-checkbox>
								</el-checkbox-group>
							</el-form-item>
							<el-form-item>
								<el-button type='primary' v-on:click='query("filterTriggle")'>确定</el-button>
							</el-form-item>
						</el-form>
					</el-popover>
					<el-button type='text' size='mini' v-show='clearShow' v-on:click='clearSearch'>清楚筛选</el-button>
				</el-main>
				<el-aside width='170px' class='f-tar'>
				  <el-button type='success' size='mini' icon="el-icon-plus" v-on:click='go(createUrl)'>上传</el-button>
					<el-dropdown>
						<el-button type='primary' size='mini'>导出<i class="el-icon-caret-bottom"></i></el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>导出引文</el-dropdown-item>
							<el-dropdown-item>导出表格</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-aside>
			</el-container>
			<slot name='first'></slot>
		</el-tab-pane>
    <el-tab-pane v-bind:label="recycle" name="second">
		  <slot name='second'></slot>
		</el-tab-pane>
  </el-tabs>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>