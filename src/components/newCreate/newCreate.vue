<template>
  <div class="newCreate">
    <ul class="newCreateBox">
      <li class="selected == ind ? 'active : '' " v-for="(i,ind) in formData" :key="ind">{{i.label}}</li>
      <li @click="addCreate">+添加创意</li>
    </ul>
    <el-tab-pane  @tab-click.native="centerDialogVisibles" label="+添加创意" name="add">
      <el-dialog title="选择模板" :visible.sync="centerDialogVisible" width="30%">
        <div class="add-left" @click="select('single')">
          <div class="simple">
            <div class="simple-power"></div>
            <div>
              <p class="simple-head"></p>
              <p class="simple-head"></p>
            </div>
          </div>
          <div class="simples">单图</div>
        </div>
        <div class="add-right" @click="select('multiple')">
          <p class="simple-head"></p>
          <div>
            <p class="simple-power"></p>
            <p class="simple-power"></p>
            <p class="simple-power"></p>
          </div>
          <div class="simples">多图</div>
        </div>
      </el-dialog>
    </el-tab-pane>
    <div>
      <Upload></Upload>
    </div>
  </div>
</template>

<script>
import Upload from '../upload/upload.vue'
export default {
  name: "newCreate",
  data() {
    return {
      selected: 0,
      centerDialogVisible: false
    };
  },
  props: {
    formData: {
      required: true,
      type: Array
    }
  },
  components: {
    Upload
  },
  methods: {
    addCreate(){
      this.$emit('edit')
    },
    centerDialogVisibles () {
      this.centerDialogVisible = true
    },
    select (type) {
      if (this.centerDialogVisible) {
        if (type) {
          this.type = type
        }
      }
      if (this.type === 'single') {
        this.activeName = 'first'
        this.centerDialogVisible = false
      } else if (this.type === 'multiple') {
        this.activeName = 'second'
        this.centerDialogVisible = false
      }
    },
    handleClick (tab, event) {
      if (tab.name === 'add') {
        this.centerDialogVisibles()
      }
    }
  }
};
</script>

<style>
.newCreateBox li{
  display: inline-block;
  line-height: 40px;
  margin: 0 10px;
}
.newCreateBox .active{
  color: skyblue;
  border-bottom: 2px solid skyblue;
}
</style>
