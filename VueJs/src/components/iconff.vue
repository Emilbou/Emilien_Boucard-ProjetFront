<script setup lang="ts">
import { ref } from 'vue'

const isSpinning = ref(false)
const isReverse = ref(false)

const handleMouseEnter = () => {
  isSpinning.value = true
  isReverse.value = false
}

const handleMouseLeave = () => {
  isReverse.value = true
}

const handleAnimationEnd = () => {
  if (isReverse.value) {
    isSpinning.value = false
    isReverse.value = false
  }
}
</script>

<template>
  <div
    class="icone-container"
    :class="{
      spinning: isSpinning,
      reverse: isReverse,
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @animationend="handleAnimationEnd"
  />
</template>

<style lang="scss">
.icone-container {
  display: flex;
  aspect-ratio: 1/1;
  width: 150px;
  border-radius: 9999px;
  background-color: blue;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    width: 20%;
    height: 90%;
    background-color: red;
    border-radius: 100%;
  }

  &.spinning {
    animation: spin 1s linear infinite;
  }

  &.spinning.reverse {
    animation: spin 1s linear reverse forwards;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
