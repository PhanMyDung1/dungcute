<template>
  <div>
    <h1>Count = {{ count }}</h1>
    <div>
      <v-btn
        outlined
        color="teal"
        @click="increase"
      >Increase</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
    };
  },
  watch: {
    count (newVal) {
      if (newVal > 100) alert("Bấm ít thôi hỏng chuột bậy giờ :))");
    }
  },
  methods: {
    increase () {
      this.count += Math.max(Math.floor(Math.random() * 10), 5);
    }
  },
};
</script>