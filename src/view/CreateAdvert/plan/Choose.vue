<template>
  <div id="choose">
    <h1>建立广告计划</h1>
    <div class="cho">
      <dl>
        <dt><i class="el-icon-time"></i></dt>
        <dd>
          <h5>已有计划</h5>
          <p>选择已有计划,直接创建广告</p>
        </dd>
      </dl>
      <dl>
        <dt><i class="el-icon-circle-plus-outline"></i></dt>
        <dd>
          <h5>新建计划</h5>
          <p>新建推广目标，计划设置</p>
        </dd>
      </dl>
    </div>
    <ul>
      <li>
        <div>
          推广目标
        </div>
        <div class="right">
          <el-radio-group v-model="radio5" size="small">
          <el-radio-button label="网页"></el-radio-button>
          <el-radio-button label="ios应用"></el-radio-button>
          <el-radio-button label="Android应用"></el-radio-button>
          </el-radio-group>
        </div>
      </li>
      <li>
        <div>计划名称：</div>
        <div><input type="text" placeholder="请设置广告名称"></div>
      </li>
      <li>
        <div>每日限额：</div>
        <div>
          <input type="text" placeholder="请设置广告名称"><span>元/天</span>
          <el-tooltip placement="top">
            <div slot="content">最低100元，若不设置<br/>按账户金额进行投放</div>
            <i class="el-icon-question"></i>
          </el-tooltip>
        </div>
      </li>
    </ul>
    <div class="button">
      <el-row>
        <el-button class="next">下一步</el-button>
        <el-button>保存</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio5: '网页',
      radio7: '1'
    }
  }
}
</script>

<style scoped>
#choose {
  width: 100%;
  height: 100%;
}
.cho {
  width: 100%;
  height: 76px;
  display: flex;
  margin-top: 32px;
}
.cho dl {
  width: 243px;
  height: 76px;
  margin-right: 24px;
  border: 1px solid #ccc;
  display: flex;
}
.cho dl dt {
  width: 40px;
  height: 76px;
  text-align: center;
  line-height: 76px;
}
.cho dl dt i {
  display: block;
  width: 32px;
  height: 32px;
  color: #2873ff;
  margin-left: 10px;
  margin-top: 30px;
}
.cho dl dd {
  flex: 1;
  padding-left: 10px;
  padding-top: 12px;
}
.cho dl dd h5 {
  font-size: 18px;
}
.cho dl dd p {
  font-size: 12px;
  color: #000;
  line-height: 30px;
}
.cho dl:nth-child(2) {
  border: 2px solid #2873ff;
}
ul {
  width: 100%;
  height: auto;
  margin-top: 30px;
}
ul li {
  width: 100%;
  height: 32px;
  line-height: 32px;
  margin-top: 20px;
  list-style: none;
}

ul li div {
  float: left;
}
.el-radio-group {
  margin-left: 330px;
}
li div input {
  display: inline-block;
  width: 432px;
  height: 32px;
  padding-left: 15px;
  margin-left: 8px;
}
li div span {
  padding-left: 5px;
}
.button {
  margin-top: 50px;
}
.el-button {
  display: inline-block;
  width: 120px;
  height: 40px;
}
.next {
  background: #e8e8e8;
}
</style>
