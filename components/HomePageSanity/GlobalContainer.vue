<script setup lang="ts">
const empty = "";
</script>

<template>
  <div class="GlobalContainer">
    <div>{{ empty }}</div>
    <div class="GlobalContainer__title-content">
      <h3 class="GlobalContainer__title"><slot name="SlotTitle" /></h3>
      <p class="GlobalContainer__description"><slot name="SlotDescription" /></p>
    </div>
    <slot name="SlotComponent" />
    <div>{{ empty }}</div>
  </div>
</template>

<style lang="scss">
.GlobalContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100svh;
  &__title-content {
    text-align: center;
    margin-top: 50px;
    .GlobalContainer__title {
        font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
      font-family: 'Gazpacho';
      font-weight: 700;
      color: $primaryColor;
    }
    .GlobalContainer__description {
    color: $primaryColor;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 2rem;
    line-height: 1.6;
    }
  }
}
</style>
