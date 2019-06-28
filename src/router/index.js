import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks'

const Manage = () =>
  import('@/views/Manage.vue' /* webpackChunkName: "chunk-manage" */)
const Settings = () =>
  import('@/views/Settings.vue' /* webpackChunkName: "chunk-about" */)

Vue.use(Router)

const routerInstance = new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      component: Manage,
      meta: {
        title: '用户信息管理'
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        title: 'Settings'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

const beforeEachKeys = Object.keys(hooks.beforeEach)

if (beforeEachKeys.length > 0) {
  beforeEachKeys.map(hook => {
    routerInstance.beforeEach(hooks.beforeEach[hook])
  })
}

export default routerInstance
