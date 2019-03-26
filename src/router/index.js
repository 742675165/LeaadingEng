import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Logins from '@/components/login'
import TextLogin from '@/components/textlogin'
import Register from '@/components/register'
import HomePage from '@/components/homepage'

Vue.use(Router)

Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Logins',
      component: Logins
    },
    {
      path: '/textlogins',
      name: 'TextLogin',
      component: TextLogin
    },
    {
      path: '/registers',
      name: 'Register',
      component: Register
    },
    {
      path: '/homepages',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
