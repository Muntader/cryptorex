import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/index'
import news from '@/components/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
      {
          path: '/news',
          name: 'news',
          component: news
      }
  ]
})
