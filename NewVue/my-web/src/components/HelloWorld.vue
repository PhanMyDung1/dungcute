<template>
  <div>
    <h1>{{ message }}</h1>
    <h1>{{ messageUpper }}</h1>
    <button @click="Change" ref="mybtn">Change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Message BAN đầu Của app",
      name: "Change",
    };
  },
  computed: {
    messageUpper() {
      return this.message.toUpperCase();
    },
  },
  methods: {
    Change() {
      this.message = "Message thay đổi bởi message";
      this.$refs.mybtn.innerText = "Changed by Vue";
      //doi ten nut thi sao a?
      //ham Change co the nam trong computed ko?Co
    },
  },
};
</script>

<style></style>
