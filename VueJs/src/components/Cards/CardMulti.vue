<script lang="ts" setup>
import CardTemplate from './CardTemplate.vue'
import CardProgress from '@/components/Cards/CardProgress.vue'

defineProps<{
  progress: number
  text: string
}>()
</script>
<template>
  <CardTemplate>
    <CardProgress :progress="progress" :text="text" />
  </CardTemplate>
</template>
