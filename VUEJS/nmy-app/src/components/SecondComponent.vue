<template>
  <div>
    <div class="box-1">
      <h3>Second Component</h3>
      <div>User name: {{ myUser.name }}</div>
      <div>User age: {{ myUser.age }}</div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../main";
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  //data:()=>({}),
  data() {
    return {
      myUser: this.userInfo,
    };
  },
  created() {
    //khúc age bỏ dấu ngoặc tròn đc ko?1 ham
    EventBus.$on("ageWasChanged", (age) => {
      this.myUser.age = age;
    });
  },
  methods: {
    test() {
      console.log("ref");
    },
  },
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
