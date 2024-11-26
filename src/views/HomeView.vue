<script setup lang="ts">
import MyComponent from '@/components/ComponentConfig.vue'
import ProgressBarTitle from '@/components/ProgressBarTitle/ProgressBarTitle.vue'
import CardHabit from '@/components/CardHabit/CardHabit.vue'
const TestArray = [{ id: 1 }, { id: 2 }, { id: 3 }]
</script>

<template>
  <div>
    <h1>Page Principale</h1>
    <MyComponent v-for="item in TestArray" :key="item.id" :index="item.id" />
    <ProgressBarTitle :progress="20" />
    <CardHabit />
  </div>
</template>
<style lang="scss">
div {
  h1 {
    color: $primaryColor;
  }
}
</style>
