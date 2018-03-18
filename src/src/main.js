// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuex from 'vuex'
import i18n from './utils/lang'
import store from './store/store.js'
import url from './utils/url'

Vue.use(url)

Vue.use(Vuex)
Vue.config.productionTip = false
window.axios = require('axios');


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
});
