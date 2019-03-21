import Vue from 'vue'
import Router from 'vue-router'
import Enters from '@/components/enter'
import Homes from '@/components/homes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Enters',
      component: Enters
    },
    {
      path: '/homes',
      name: 'homes',
      component: Homes
    }
  ]
})

