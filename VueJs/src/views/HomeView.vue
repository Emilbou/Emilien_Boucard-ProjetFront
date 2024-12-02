<script setup lang="ts">
import MyComponent from '@/components/ComponentConfig.vue'
import ProgressBarTitle from '@/components/ProgressBarTitle/ProgressBarTitle.vue'
import CardContainer from '@/components/Cards/CardsContainer.vue'
import CardTemplate from '@/components/Cards/CardTemplate.vue'
import MonthlyReport from '@/components/MonthlyReport/MonthlyReport.vue'
const userInfo = 'Emilien'
const TestArray = [{ id: 1 }, { id: 2 }, { id: 3 }]
</script>

<template>
  <div style="padding-inline: 4rem">
    <h1>Bienvenu {{ userInfo }}</h1>
    <MyComponent v-for="item in TestArray" :key="item.id" :index="item.id" />
    <ProgressBarTitle :progress="20" />
    <CardContainer />
    <hr />
    <CardTemplate />
    <MonthlyReport />
  </div>
</template>

<style lang="scss">
h1 {
  color: $primaryColor;
  position: relative;
  &::after {
    content: '';
    position: absolute;
  }
}
h4 {
  font-weight: 400;
}
</style>
