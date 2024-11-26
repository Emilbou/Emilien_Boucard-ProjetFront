<script setup lang="ts">
import ProgressBarTitle from '../ProgressBarTitle/ProgressBarTitle.vue'
</script>
<template>
  <div class="CardHabit">
    <ProgressBarTitle :progress="20" Text="props 1" />
    <ProgressBarTitle :progress="50" Text="props 2" />
    <ProgressBarTitle :progress="80" Text="Progress Bar Title" />
  </div>
</template>
