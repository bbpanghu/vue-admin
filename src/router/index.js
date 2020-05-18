import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

/**

* hidden: true                   如果设置了 就不会显示在左侧导航栏
 * alwaysShow: true
                                 如果设置为true，将始终显示根菜单
                                 *如果未设置alwaysShow，则当项有多个子路线时，
                                 *它将变为嵌套模式，否则不显示根菜单
 * redirect: noRedirect          如果设置noRedirect，则不会在面包屑中重定向
 * name:'router-name'            该名称由<keep-alive>使用（必须设置！！！）
 * meta : {
    roles: ['admin','editor']    设置页面访问权限（你可以设置多个访问者）
    title: 'title'               侧边栏的名称
    icon: 'svg-name'             侧边栏的icon
    breadcrumb: false            如果设置了false 则顶部的面包屑将不会显示
    activeMenu: '/example/list'  如果设置了页面将会高亮这个导航
  }
 */

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path : '/mine',
    component: Layout,
    children: [{
      path: '/',
      name: '个人信息',
      component : ()=>import('@/views/mine/index'),
      meta: { title: '个人信息', icon: 'user' },
      hidden : true
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '控制台',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '控制台', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: '组件例子',
    meta: { title: '组件', icon: 'example' },
    children: [
      {
        path: 'table',
        name: '表格',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'tree',
        name: '树形',
        component: () => import('@/views/tree/index'),
        meta: { title: '树形', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '表单',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://uocu.bypanghu.xyz',
        meta: { title: '外链', icon: 'link' }
      }
    ]
  },

  // 404页面必须设置在所有导航最后
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
