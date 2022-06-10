<template>
  <div>
    <div class="box-1">
      <h3>Second Component</h3>
      <div>User name: {{ user.name }}</div>
      <div>User age: {{ user.age }}</div>
      <v-btn outlined color="green" @click="changeName">Change name</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      currentUser: this.user,
    };
  },
  methods: {
    changeName() {
      this.currentUser.name = "Jame";
      this.$emit("nameWasChange", this.currentUser.name);
    },
    test() {
      alert("Hello everyone");
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
