<template>
  <div class="uploadBox">
    <h1>广告创意</h1>
    <h4>落地页</h4>
    <el-row>
      <el-col :span="12">
        <el-input v-model="input" placeholder="请设置广告名称">
          <template slot="prepend">着陆页地址</template>
        </el-input>
      </el-col>
    </el-row>
    <h4>上传创意</h4>
    <el-row>
      <el-col>
        <el-row>
          <el-col>
            <tpl-new-create :formData="formData" @edit="addNewCreate"></tpl-new-create>
            <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="创意1" name="first">
                <Upload></Upload>
              </el-tab-pane>
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
            </el-tabs> -->
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="广告文案:">
                <el-input v-model="form.name" placeholder="请设置广告名称"></el-input>
              </el-form-item>
              <el-form-item label="监控链接:">
                <el-input v-model="form.monitoring" placeholder="请设置广告名称"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button type="info">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tplNewCreate from '../../../components/newCreate/newCreate.vue'
export default {
  data () {
    return {
      input: '',
      activeName: 'first',
      form: {
        name: '',
        monitoring: ''
      },
      centerDialogVisible: false,
      type: '',
      len: 1,
      formData: [{
        label: '创意1',
        name: 'tab-create1',
      }]
    }
  },
  components: {
    tplNewCreate
  },
  methods: {
    addNewCreate () {
      this.formData.push({
        label: '创意' + (++this.len),
        name: 'tab-create' + this.len
      })
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
    // handleAvatarSuccess (res, file) {
    //   this.imageUrl = 'http://localhost:9000/' + res.data.value
    // },
    // beforeAvatarUpload (file) {
    //   const isJPG = file.type === 'image/jpeg' || 'image/jpg' || 'image/JPG' || 'image/png' || 'image/PNG'
    //   const isLt2M = file.size / 1024 / 1024 < 5

    //   if (!isJPG) {
    //     this.$message.error('上传头像图片只能是 JPG 格式!')
    //   }
    //   if (!isLt2M) {
    //     this.$message.error('上传头像图片大小不能超过 2MB!')
    //   }
    //   return isJPG && isLt2M
    // }
  }
}
</script>

<style>
h4{
  margin: 10px 20px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar-uploader-icon:nth-child(1){
    border-right: 1px dashed #eee;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .page {
  margin: 30px 0;
  height: 65px;
}

.uploading {
  margin-top: 30px;
  position: relative;
}

.mains {
  background: #fff;
}

.creativity,
.el-container {
  width: 100%;
  height: 100%;
}

.el-tabs__item.is-active {
  color: #FA8C16;
}

.el-tabs__item:hover {
  color: #FA8C16;
}

.el-tabs__active-bar {
  background: #FA8C16;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.btn {
  border-radius: 0;
  background: #E8E8E8;
  color: #333;
  width: 100px;
}

.add {
  color: #6399FF;
  position: absolute;
  top: 33px;
  left: 130px;
  font-size: 12px;
}

.add-left,
.add-right {
  width: 45%;
  height: 150px;
  border: 1px solid #ccc;
  float: left;
  margin-right: 10px;
}

.el-dialog {
  height: 300px;
}

.simple {
  margin-top: 20px;
  height: 70px;
}

.simple-power {
  width: 65px;
  height: 65px;
  background: #E8E8E8;
  margin-left: 10px;
}

.simple div {
  float: left;
}

.simple-head {
  width: 80px;
  height: 20px;
  background: #E8E8E8;
  margin-left: 10px;
  margin-top: 5px;
}

.simples {
  margin-top: 25px;
  width: 100%;
  text-align: center;
}

.add-right .simple-head {
  width: 90%;
  margin-top: 20px;
}

.add-right .simple-power {
  width: 43px;
  height: 43px;
  float: left;
  margin-top: 10px;
}

.add-right .simples {
  margin-top: 73px;
}

</style>
