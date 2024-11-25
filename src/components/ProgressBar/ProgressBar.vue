<script setup lang="ts">
defineProps({
  progress: {
    type: Number,
    default: 50,
  },
})
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__progress" :style="{ '--progressBar': `${progress}%` }"></div>
  </div>
</template>

<style lang="scss">
.progress-bar {
  $self: &;
  transition: 0.5s;
  width: 100%;
  height: 0.25rem;
  background-color: $gray100;
  border-radius: 999px;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;

  @keyframes AnimateProgress {
    from {
      width: 0;
    }
    to {
      width: var(--progressBar);
    }
  }
  &__progress {
    animation: AnimateProgress forwards 1s ease-out;
    height: 100%;
    background-color: $primaryColor;
    border-radius: 999px;
    transition: 0.5s;
  }
}
</style>
