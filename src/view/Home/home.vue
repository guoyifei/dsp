<template>
  <div class="home-wrap">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="always">
            总是显示
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
            总是显示
          </el-card>
        </el-col>
      </el-row>
      <el-row class="el-row-wrap">
        <el-col :span="24">
          <div>
            <el-row>
              <el-col :span="12"><h4>整体情况</h4></el-col>
              <el-col :span="12" style="text-align:right;">
                <el-date-picker
                  v-model="days"
                  type="month"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  placeholder="选择月">
                </el-date-picker>
                <!-- <el-date-picker
                  v-model="days"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker> -->
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :span="6">
                <el-card shadow="always">福克斯价格</el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="always">福克斯价格</el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="always">福克斯价格</el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="always">福克斯价格</el-card>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="12" style="text-align:right;">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in data"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row>
              <div ref="graph" class="graph"></div>
            </el-row>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { init } from 'echarts'
export default {
  data () {
    return {
      days: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }],
      data: [{
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  watch: {
    days (o, n) {
      console.log(o)
    }
  },
  methods: {

  },
  mounted () {
    let graphInstance = init(this.$refs.graph)
    let option = {
      xAxis: {
        type: 'category',
        data: ['2016/10', '2016/11', '2016/12', '2017/1', '2017/2']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [1100, 1200, 1300, 1400, 1500, 1600, 1700],
        type: 'line'
      }]
    }
    graphInstance.setOption(option)
  }
}
</script>

<style>
.graph{
  width: 100%;
  height: 400px;
}
.el-row-wrap{
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
