<script lang="ts" setup>
import CardTemplate from './CardTemplate.vue'

defineProps<{
  progress: number
  text: string
}>()
</script>
<template>
  <CardTemplate> </CardTemplate>
</template>
