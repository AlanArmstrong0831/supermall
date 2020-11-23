<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
    </tab-bar>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import TabBar from './components/tabbar/Tabbar'

export default {
  name: 'App',
  components: {
    TabBar,
    
  }
}
</script>

<style>
@import './assets/css/base'
</style>
