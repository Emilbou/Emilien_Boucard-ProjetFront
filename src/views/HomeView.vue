<script setup lang="ts">
import MyComponent from '@/components/ComponentConfig.vue'
import ProgressBarTitle from '@/components/ProgressBarTitle/ProgressBarTitle.vue'
import CardContainer from '@/components/Cards/CardsContainer.vue'
const TestArray = [{ id: 1 }, { id: 2 }, { id: 3 }]
</script>

<template>
  <div style="padding-inline: 4rem">
    <h1>Page Principale</h1>
    <MyComponent v-for="item in TestArray" :key="item.id" :index="item.id" />
    <ProgressBarTitle :progress="20" />
    <CardContainer />
  </div>
</template>

<style lang="scss">
div {
  h1 {
    color: $primaryColor;
  }
  h4 {
    font-weight: 400;
  }
}
</style>
