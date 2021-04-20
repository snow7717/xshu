<template>
  <div class='container'>
	  <cheader v-bind:from='from'></cheader>
		<el-container>
		  <caside active='0'></caside>
			<el-main v-bind:style='"height:" + (windowH - 80) + "px"'>
			  <el-card class='card-data'>
					<header slot="header" class="clearfix f-db">
						<h4 class='f-ib f-fwn'>数据中心</h4>
						<el-button class='opera f-fr' type="text" v-on:click='toggleData'>
						  {{dataH == 'auto' ? '收起更多' : '展开更多'}}
							<i v-bind:class='dataH == "auto" ? "el-icon-arrow-up" : "el-icon-arrow-down"' class='f-fwb'></i>
					  </el-button>
					</header>
					<el-row :gutter="20" class='f-oh' v-bind:style='"height:" + dataH'>
					  <el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12' v-for='(item,index) in datas' v-bind:key='index'>
						  <div v-on:click='go(item.route ? item.route : "/")'>
								<el-card class='subcard f-csp' v-bind:class='"subcard" + index' shadow='hover' >
									<header slot="header" class="clearfix f-db">
										<h4 class='f-ib f-fwn f-fs1'>{{item.title}}</h4>
									</header>
									<b class='f-db f-tac'>{{item.total}}</b>
								</el-card>	
							</div>
						</el-col>
					</el-row>
				</el-card>
				<el-card class='chart-card'>
				  <header slot="header" class="chart-header clearfix f-db">
						<el-row>
						  <el-col :span='4'>
							  <h4 class='f-ib f-fwn'>成果走势图</h4>
							</el-col>
							<el-col :span='20' class='f-tar'>
							  <el-select size='small' v-model="option.series" multiple placeholder='成果类型' collapse-tags value-key='name' v-on:change='seriesChange'>
									<el-option v-for="(item,index) in series" v-bind:key="index" v-bind:label="item.name" v-bind:value="item"></el-option>
								</el-select>
							</el-col>
						</el-row>
					</header>
					<v-chart class='chart' v-bind:options="option" autoresize theme="light" ref='chart'></v-chart>
				</el-card>
				<el-card class='chart-card'>
				  <header slot="header" class="chart-header clearfix f-db">
						<el-row>
						  <el-col :span='4'>
							  <h4 class='f-ib f-fwn'>成果统计图</h4>
							</el-col>
							<el-col :span='20' class='f-tar'>
							  <el-select size='small' v-model="option1.xAxis.data" multiple placeholder='成果类型' collapse-tags value-key='name' v-on:change='resultChange'>
									<el-option v-for="(item,index) in barseries" v-bind:key="index" v-bind:label="item.name" v-bind:value="item.name"></el-option>
								</el-select>
							  <el-date-picker v-model="year" type="year" placeholder="请选择年份" size='small' v-on:change='yearChange' value-format='yyyy' v-bind:picker-options="yearoption"></el-date-picker>
							</el-col>
						</el-row>
					</header>
					<v-chart class='chart' v-bind:options="option1" autoresize theme="light" ref='chart1'></v-chart>
				</el-card>
			</el-main>
		</el-container>	
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>