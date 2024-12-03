<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: false,
  },
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void
}>()
</script>

<template>
  <input
    type="radio"
    class="radio"
    :class="{ '-disabled': disabled }"
    :checked="modelValue === value"
    :value="value"
    :name="name"
    :disabled="disabled"
    @change="$emit('update:modelValue', value)"
  >
</template>

<style lang="scss">
.radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: rem(24px);
  aspect-ratio: 1 / 1;

  border: 2px solid $gray400;
  transition: 0.2s all linear;
  margin-right: 5px;
  cursor: pointer;

  position: relative;
  top: 4px;

  &:hover:not(:disabled) {
    border: $primaryColor solid rem(8px);
  }

  &:focus {
    border: $primaryColor solid rem(8px);
    outline: none;
  }

  &:checked {
    border: $primaryColor solid rem(8px);
    border: 6px solid $primaryColor;
  }

  &.-disabled {
    border-color: $gray100;
    cursor: not-allowed;

    &:checked {
      border-color: $gray400;
    }
  }
}
</style>
