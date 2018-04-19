import { login } from '../until/request'
let actions = {
  getToken ({ commit }, { data, notify, router }) {
    login(data).then(res => {
      if (res.success === 0) {
        commit('saveToken', res.token)
        commit('saveUser', res.user.name)
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', res.user.name)
        notify({
          title: '成功',
          message: '即将跳往首页',
          type: 'success'
        })
        setTimeout(() => {
          router.push('/home')
        }, 1000)
      } else {
        notify.error({
          title: '错误',
          message: '用户名或密码错误'
        })
      }
    })
  }
}

export default actions
