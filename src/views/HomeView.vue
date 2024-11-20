<script setup lang="ts">
import MyComponent from '@/components/ComponentConfig.vue'
const TestArray = [{ id: 1 }, { id: 2 }, { id: 3 }]
</script>

<template>
  <div>
    <h1>Page Principale</h1>
    <MyComponent v-for="item in TestArray" :key="item.id" :index="item.id" />
  </div>
</template>
<style lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>
