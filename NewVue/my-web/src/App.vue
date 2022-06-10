<template>
  <nav>
    <div style="text-align: center">
      <router-link to="/">Home</router-link> |
      <router-link to="/thongTin">About</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
  </nav>
  <!-- app bar -->
  <!-- side bar -->
  sdfasdfasdfasdf
  <router-view />
</template>

<style scpoe>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
