<script lang="ts" setup>
</script>

<template>
  
  <button class="DeleteButton">
    <slot/>
  </button>
</template>

<style lang="scss">
.DeleteButton {
  color: $white;
  border-radius: rem(48px);
  text-decoration: none;
  cursor: pointer;
  margin-top: 1rem;
  margin: 0;
  aspect-ratio: 1;
  width: fit-content;
  flex-shrink: 0;
  line-height: 0;
  padding: 1rem;
  background-color: $errorColor;
  border: $errorColor;
  &:hover {
    background: $primaryDarkColor;
  }

  &.-outline {
    background: transparent;
    color: $primaryColor;

    &:hover {
      color: $primaryDarkColor;
      border-color: $primaryDarkColor;
    }

    &.-disabled {
      background: transparent;
      color: $gray400;
      border-color: $gray100;
    }
  }

  &.-disabled {
    background: $gray100;
    border-color: $gray100;
    color: $gray400;
    cursor: not-allowed;
  }

  &.-small {
    padding: rem(8px) rem(16px);
  }
}
</style>

