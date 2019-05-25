<<<<<<< HEAD
# bookMail
=======
# vue-book

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
>>>>>>> base on vue

``` bash
tips:
1.`**路由元信息meta:{keepAlive:true}实现页面缓存**`
：对要进行缓存的页面添加路由元信息
    对<router-view v-if="$route.meta.keepAlive"/>控制缓存页面显示，条件非控制非缓存页面显示
    缓存的页面再次请求则不在向服务端发出请求
    
2.`**解决fixed定位时**`：Tab栏遮盖到内容：给Tab栏包裹一个父级div，设置此父级div的宽高和tab相同

3.`**实现路由动画**` ：<transition name="fade"></transition>
                      fade-enter...官方文档有详细说明
                      
4.`**分页加载**`：服务端：接收前端传来的offset，slice获取指定的pageSize长度的数据，返回给前端。客户端：每次加载都需要前一次的值加上后一次获取的值，所以this.offset = book.length其中获取**`对象`**的方式let {同名变量，同名变量，...} = 获取接口数据

5.`**下拉自动分页加载思想**`：scroll无效的问题解决，原生addEventListener绑定，指定事件在捕获阶段发生，设置为true
                             scrollTop一直为0的问题：页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement。
                                                    页面没有DTD，即没指定DOCTYPE时，使用document.body。
                                                     document.documentElement.scrollTop || document.body.scrollTop
                             满足scrollTop + clientHeight > scrollHeight，调用接口函数
                             ！！设计定时器异步加载减少滚动次数
                             
6.路由的懒加载：router.vuejs.org====》Lazy Loading Routes
               改变router的component: () => import(url)
                            
```
