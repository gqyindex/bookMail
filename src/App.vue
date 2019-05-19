<template>
  <div id="app">
    <router-view/>
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
</style>
