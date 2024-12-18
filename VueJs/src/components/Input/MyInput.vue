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
    :placeholder="placeholder"
    :disabled="disabled"
    class="input"
    :class="{
      '-outline': variant === 'outline',
      '-disabled': disabled,
      '-error': error,
      '-small': small,
    }"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
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
  background: white;

  &:focus {
    border: $primaryColor solid 2px ;
    outline: none;
  }

  &:active {
    border: $primaryColor solid 2px ;
  }

  &.-outline {
    color: $primaryColor;

    &:focus {
      border: $primaryColor solid 2px ;
    }

    &:active {
      border: $primaryColor solid 2px ;
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
