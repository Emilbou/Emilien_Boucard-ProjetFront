<script lang="ts" setup>


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
