<script setup lang="ts">

defineProps({
  progress: {
    type: Number,
    default: 50,
  },
  text: {
    type: String,
    default: 'Progress Bar Title',
  },
})
</script>
<template>
  <div class="ProgressBarTitle">
    <h4 class="ProgressBarTitle_Title">Progression globale</h4>
    <div class="ProgressBarTitle_layout">
      <ProgressBar :progress="progress" />
      <span class="ProgressBarTitle_textprogress">{{ progress }}%</span>
    </div>
  </div>
</template>

<style lang="scss">
.ProgressBarTitle {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  font-size: 1.25rem;
  .ProgressBarTitle_Title {
    margin: 0;
  }
  .ProgressBarTitle_layout {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    .ProgressBarTitle_textprogress {
      font-size: 1rem;
      color: $gray800;
      font-style: italic;
      font-weight: 600;
      padding-inline: 0.5rem;
    }
  }
}
</style>
