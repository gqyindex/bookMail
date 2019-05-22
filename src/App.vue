<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
       <router-view v-if="$route.meta.keepAlive"/>
     </keep-alive>
    </transition>
    <transition name="fade">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
    <div id="footer">
    <Tab></Tab>
    </div>
  </div>
</template>

<script>

import Tab from './commen/Tab'
export default {
  name: 'App',
  components: {Tab}
}
</script>

<style>
  *{margin: 0;padding: 0}
  #footer{
    height: 60px;
    width: 100%;
  }
  .fade-enter{
    opacity: .2;
  }
  .fade-enter-active{
    transition: all .3s ease;
  }
  .fade-leave-active{
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    opacity: .2;
  }
</style>
