<template>
  <div>
    <div class="box-1">
      <h3>Third Component</h3>
      <div>User age: {{ currentUser.age }}</div>
      <v-btn outlined color="green" @click="changeAge">Change Age</v-btn>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../main";
export default {
  props: {
    myUser: {
      type: Object,
    },
  },
  data(){
    return {
      currentUser: this.myUser
    }
  },
  methods: {
    changeAge() {
      this.currentUser.age = 30;
      EventBus.$emit("ageWasChange", this.currentUser.age);
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
