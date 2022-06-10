<template>
  <div><FirstComponent />3</div>
</template>

<script>
import FirstComponent from "./FirstComponent.vue"; //1
export default {
  components: {
    FirstComponent, //2
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
