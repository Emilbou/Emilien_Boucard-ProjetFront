<script setup lang="ts">

defineProps<{
  progress: number
  text: string
}>()
</script>
<template>
  <ProgressBarTitle :progress="progress" />
  <ul>
    <li>Participants aujourd'hui : {{ text }}</li>
    <li>Participants ce mois-ci : {{ text }}</li>
    <li>Participants totaux : {{ text }}</li>
  </ul>
</template>
<style lang="scss">
ul {
  li::marker {
    color: $primaryColor;
    font-size: 1.5rem;
  }
}
</style>
