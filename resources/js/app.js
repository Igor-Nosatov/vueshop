require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import Router from './routes/routing.js'

Vue.component('footer-component', require('./components/FooterComponent').default);

const router = new VueRouter({
    mode: 'history',
    routes: Router
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if(to.matched.some(record => record.meta.is_admin)) {
        if(user.is_admin == 1){
            next()
        }
        else{
            next({ name: 'shop'})
        }
      }
      else if(to.matched.some(record => record.meta.is_user)) {
        if(user.is_admin == 0){
            next()
        }
        else{
            next({ name: 'admin'})
        }
      }
      next()
    }
  } else {
    next()
  }
})

const app = new Vue(Vue.util.extend({
    router
}, App)).$mount('#app');
