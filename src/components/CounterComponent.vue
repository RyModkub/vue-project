<template>
  <div>
    <button @click="increment">เพิ่ม</button> จำนวน: {{ count }}
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>
