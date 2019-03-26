// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$set(axios,axios)
Vue.use(Antd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
