// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import VueRouter from 'vue-router'
import test from './components/test.vue'
import User from './components/User.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      component: User
    },
    {
      path:'/test',
      component: test
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({

  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
