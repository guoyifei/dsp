<template>
  <div class="setup">
    <div class="setup-left">
      <ul>
        <li @click="toPlanPage('/createAdvert/createplan')">
          <h4>建立广告计划</h4>
          <span style="color: skyblue;">选择计划</span>
        </li>
        <li @click="toPlanPage('/createAdvert/info')">
          <h4>广告单元</h4>
          <span>基本信息</span>
          <span>定向</span>
          <span>广告位</span>
          <span>出价</span>
        </li>
        <li @click="toPlanPage('/createAdvert/upload')">
          <h4>广告创意</h4>
          <span>落地页</span>
          <span>上传创意</span>
        </li>
      </ul>
    </div>
    <div class="setup-right">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setup',
  methods: {
    toPlanPage (path) {
      this.$router.push({
        path: path
      })
    }
  }
}
</script>

<style scoped>
  .setup-left{
    width: 150px;
    height: 444px;
    float: left;
    text-align: center;
  }
  .setup-left ul li{
    margin-top: 50px;
    font-size: 14px;
    cursor: pointer;
    list-style: none;
  }
  .setup-left ul li span{
    display: block;
    margin-top: 15px;
    color: rgb(83, 82, 82);
  }
  .setup-left ul li h4{
    margin-left: -25px;
  }
  .setup-right{
    width: calc(100% - 200px);
    height: auto;
    float: left;
    background: #fff;
    padding: 20px;
  }
</style>
