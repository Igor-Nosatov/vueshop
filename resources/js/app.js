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


const app = new Vue(Vue.util.extend({
    router
}, App)).$mount('#app');
