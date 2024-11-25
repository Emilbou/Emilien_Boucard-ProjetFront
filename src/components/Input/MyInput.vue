<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  variant: {
    type: String as () => 'primary' | 'outline',
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: 'Input Text',
  },
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :placeholder="placeholder"
    :disabled="disabled"
    class="input"
    :class="{
      '-outline': variant === 'outline',
      '-disabled': disabled,
      '-error': error,
      '-small': small,
    }"
  />
</template>

<style lang="scss">
.input[type='text'] {
  $self: &;
  color: $gray800;
  padding: rem(16px) rem(32px);
  border-radius: rem(8px);
  border: 2px solid $gray100;
  text-decoration: none;
  cursor: pointer;
  font-size: rem(16px);
  transition: 0.5s;
  background: transparent;

  &:focus {
    border: $primaryColor solid 2px !important;
    outline: none;
  }

  &:active {
    border: $primaryColor solid 2px !important;
  }

  &.-outline {
    color: $primaryColor;

    &:focus {
      border: $primaryColor solid 2px !important;
    }

    &:active {
      border: $primaryColor solid 2px !important;
    }

    &.-disabled {
      color: $gray400;
      border-color: $gray100;
    }

    &.-error {
      border-color: $errorColor;
      color: $errorColor;
    }
  }

  &.-disabled {
    border-color: $gray100;
    color: $gray400;
    cursor: not-allowed;
  }

  &.-error {
    border-color: $errorColor;
    color: $errorColor;
  }

  &.-small {
    padding: rem(8px) rem(16px);
  }
}
</style>
