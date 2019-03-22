import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Enters from '@/components/enter'
import Logins from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Enters',
      component: Enters
    },
    {
      path: '/login',
      name: 'login',
      component: Logins
    }
  ]
})
