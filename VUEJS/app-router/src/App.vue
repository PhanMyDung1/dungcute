<template>
  <div>
    <div id="app"><FirstComponent /><!--1--></div>
    <FormInput />
  </div>
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue"; //3
import FormInput from "./components/FormInput.vue";

export default {
  name: "App",
  components: {
    FirstComponent,
    FormInput, //2
  },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
