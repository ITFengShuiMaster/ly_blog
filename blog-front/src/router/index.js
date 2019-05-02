import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/homepage/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
})