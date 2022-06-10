<template>
  <div style="height: 500px; display: flex">
    <div class="box-1">
      <h3>First Component</h3>
      <div>User name: {{ user.name }}</div>
      <div>User age: {{ user.age }}</div>
      <v-btn @click="ShowAlert">Show alert</v-btn>
    </div>
    <sencond-component
      ref="newRef"
      :user="user"
      @nameWasChange="changeName"
    ></sencond-component>
  </div>
</template>

<script>
import SencondComponent from "./SencondComponent.vue";
export default {
  components: {
    SencondComponent,
  },
  data: () => ({
    user: {
      name: "Ellie",
      age: 20,
    },
    check: false,
  }),
  watch: {
    "user.name"(newVal) {
      alert("Name was change to " + newVal + " by second component");
    },
  },
  methods: {
    changeName(val) {
      this.user.name = val;
    },
    ShowAlert() {
      this.$refs.newRef.test();
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
