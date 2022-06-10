<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TempComponent /> <!-- 3 -->
    <first-component></first-component>
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import TempComponent from './components/TempComponent.vue' //1

export default {
  name: 'App',
  components: {
    // HelloWorld
    TempComponent,
    FirstComponent //2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
