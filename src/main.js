// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558453738103&di=c592ee21360a775bb06fe293264167b0&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_gif%2FWvRmdOkp2rI2eSUMlr0RTy44T3zXEg28LjpEPpe4z3uXzyPgHdtiarQIOoR8DZY6XZqmuVKNtMMWW1BrmcuZia9w%2F640%3Fwx_fmt%3Dgif',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558453664759&di=0b4cf6a641e076a3602233352e9dcb01&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Fsmccloud%2Ffetch%2F2015%2F04%2F25%2F111600237001379016.GIF',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
