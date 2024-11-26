<script setup lang="ts">
import ProgressBarTitle from '../ProgressBarTitle/ProgressBarTitle.vue'
defineProps({
  progress: {
    type: Number,
    default: 50,
  },
  Text: {
    type: String,
    default: 'Progress Bar Title',
  },
})
</script>
<template>
  <div class="CardHabit">
    <h2 class="CardHabit__Title">titre</h2>
    <h3>Description</h3>
    <ProgressBarTitle :progress="progress" />
    <ul>
      <li>Participants aujourd'hui : {{ Text }}</li>
      <li>Participants ce mois-ci : {{ Text }}</li>
      <li>Participants totaux : {{ Text }}</li>
    </ul>
  </div>
</template>
<style lang="scss">
.CardHabit {
  border: 0.25px solid $gray800;
  border-radius: 5px;
  padding: 1rem;
  .CardHabit__Title {
    color: $primaryColor;
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }
  ul {
    li::marker {
      color: $primaryColor;
      font-size: 1.5rem;
    }
  }
}
</style>
