<template>
  <div style="height: 500px">
    <div class="box-1">
      <h3>First Component</h3>
      <div>User name: {{ user.name }}</div>
      <div>User age: {{ user.age }}</div>
      <v-btn @click="refClick">Test</v-btn>
    </div>
    <second-component
      ref="SecondComponent"
      :userInfo="user"
      @nameWasChange="user.name = $enent"
    ></second-component>
    <ThirdComponent :myUser="user" />
  </div>
</template>

<script>
import SecondComponent from "./SecondComponent.vue";
import ThirdComponent from "./ThirdComponent.vue";
export default {
  components: {
    SecondComponent,
    ThirdComponent,
  },
  data: () => ({
    user: {
      name: "Ellie",
      age: 20,
    },
  }),
  methods:{
    refClick(){
      this.$refs.SecondComponent.test();
    }
  }
};
</script>

<style scoped>
.box-1 {
  width: 300px;
  height: 200px;
  border: 1px solid blue;
  padding: 30px;
}
</style>
