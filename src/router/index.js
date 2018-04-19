import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/home.vue'
import Plan from '@/view/Plan/plan.vue'
import Unit from '@/view/Unit/unit.vue'
import Origin from '@/view/Origin/origin.vue'
import Data from '@/view/Data/data.vue'
import Hold from '@/view/Hold/hold.vue'
import Login from '@/view/Login/login.vue'
import CreateAdvert from '@/view/CreateAdvert/CreateAdvert.vue'
import CreatePlan from './../view/CreateAdvert/plan/Choose.vue'
import CreateInfo from './../view/CreateAdvert/info/info.vue'
import CreateUpload from './../view/CreateAdvert/upload/upload.vue'
import store from './../store/store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/plan',
      component: Plan
    },
    {
      path: '/unit',
      component: Unit
    },
    {
      path: '/origin',
      component: Origin
    },
    {
      path: '/data',
      component: Data
    },
    {
      path: '/hold',
      component: Hold
    },
    {
      path: '/createAdvert',
      component: CreateAdvert,
      children: [
        {
          path: '/',
          redirect: '/createAdvert/createplan'
        },
        {
          path: '/createAdvert/createplan',
          component: CreatePlan
        },
        {
          path: '/createAdvert/info',
          component: CreateInfo
        },
        {
          path: '/createAdvert/upload',
          component: CreateUpload
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let isLogin = getStateLogin()
  if (to.name === 'login') {
    next()
  } else {
    if (!isLogin) {
      next('/login')
    } else {
      next()
    }
  }
})

function getStateLogin () {
  let tk = localStorage.getItem('token')
  if (tk) {
    store.commit('saveUser', localStorage.getItem('username'))
  }
  return !!tk
}

export default router
