<template>
  <div class="loginBox">
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-form :model="formData" ref="formData">
          <el-form-item label="用户" prop="username" :rules="userRule">
              <el-input v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :rules="passRule">
              <el-input v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button plain @click="login">登录</el-button>
            </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      userRule: [{
        required: true,
        message: '请输入邮箱地址'
      }, {
        type: 'email',
        message: '请输入正确的邮箱地址'
      }],
      passRule: [{
        required: true,
        message: '请输入密码'
      }, {
        message: '请输入正确的密码'
      }]
    }
  },
  methods: {
    login () {
      this.$refs.formData.validate((isValid, options) => {
        if (isValid) {
          this.$store.dispatch('getToken', {
            data: this.formData,
            notify: this.$notify,
            router: this.$router
          })
        } else {
          this.$notify({
            title: '警告',
            message: '请输入正确的用户名和密码',
            type: 'warning'
          })
        }
      })
    }
  }
}
</script>

<style>
.loginBox{
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-image: url('../../../static/images/1.jpg')
}
</style>
