# vue-admin-template

> 这是一个美化的 vue admin 管理后台模板。它包含了 Element UI & axios 
>& iconfont & permission control & lint。
> 你可以点击浏览地址预览页面[http://uocu.bypanghu.xyz](点击预览)
> 完整的admin组件请等待开发


## Build Setup

```bash
# 克隆项目
git clone https://github.com/bypanghu/vue-admin.git

# 进入项目目录
cd vue-admin

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```
##路由定义
```
    hidden: true                 如果设置了 就不会显示在左侧导航栏
    alwaysShow: true
                                 如果设置为true，将始终显示根菜单
                                 如果未设置alwaysShow，则当项有多个子路线时，
                                 它将变为嵌套模式，否则不显示根菜单
    redirect: noRedirect         如果设置noRedirect，则不会在面包屑中重定向
    name:'router-name'           该名称由<keep-alive>使用（必须设置！！！）
    meta : {
    roles: ['admin','editor']    设置页面访问权限（你可以设置多个访问者）
    title: 'title'               侧边栏的名称
    icon: 'svg-name'             侧边栏的icon
    breadcrumb: false            如果设置了false 则顶部的面包屑将不会显示
    activeMenu: '/example/list'  如果设置了页面将会高亮这个导航
    }
    
```
示例：
```vuejs
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
 }
```

####如果网络请求需要添加token等操作可以在/utils/request.js里面设置
```vuejs
service.interceptors.request.use(
  config => {

    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

本示例发送的请求头文件自带 X-Token = cookie
```

### src目录结构

| 文件夹 |分文件夹| 内容 |
|:----:|:----:|:----|
|mock| | 模拟数据请求|
| api | |内部集成的请求文件| 
| components | |集成的组件|
| components| Breadcrumb|面包屑
| components| Hamburger|控制左侧导航栏状态
| components| SvgIcon|svgIcon
|layout| |主框架文件|
|router| | 路由文件|
|store| | 全局变量文件|
|store|modules/app.js| 全局变量文件|
|store|modules/setting.js |设置app的相关设置|
|store|modules/use.js |用户全局变量设置|
|utils| auth.js| cookie、token等相关操作|
|utils| get-page-title.js| 路由name的相关操作|
|utils| request.js| 定义的全局请求中间件|
|utils| validate.js| 定义的验证层|
|views| | 视图文件|
|permission.js| |定义的路由中间件js文件|
|setting.js| |定义的admin全局设置文件|
