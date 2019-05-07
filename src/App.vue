<template>
  <div id="app">
    <router-view/>
    <Tab></Tab>
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
</style>
