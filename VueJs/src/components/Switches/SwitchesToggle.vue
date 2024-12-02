<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as () => 'default' | 'outline',
    default: 'default',
  },
  small: {
    type: Boolean,
    default: false,
  },
})

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <input
    type="checkbox"
    :checked="modelValue"
    class="switches"
    :class="{
      '-outline': variant === 'outline',
      '-disabled': disabled,
      '-error': error,
      '-small': small,
    }"
    :disabled="disabled"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
  >
</template>

<style lang="scss">
.switches {
  $self: &;
  appearance: none;
  width: rem(60px);
  height: rem(30px);
  border-radius: 999px;
  background-color: $gray100;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    height: 100%;
    aspect-ratio: 2 / 1;
    background-color: $gray100;
    border-radius: 999px;
    padding: 2px;
    transition: 0.5s;
  }

  &::after {
    z-index: 2;
    content: '';
    display: block;
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    background-color: $white;
    transition: 0.5s;
    position: absolute;
    left: rem(2px);
  }

  &:checked {
    &::after {
      transform: translateX(100%);
    }
    &::before {
      background-color: $primaryColor;
    }
  }

  &.-outline {
    color: $primaryColor;

    &.-disabled {
      color: $gray400;
      border-color: $gray100;

      &::before {
        background-color: $gray100;
      }
    }

    &.-error {
      border-color: $errorColor;
      color: $errorColor;

      &::before {
        background-color: $errorColor;
      }
    }
  }

  &.-disabled {
    cursor: not-allowed;
    border-color: $gray100;

    &::before {
      background-color: $gray100;
    }

    &::after {
      background-color: $gray400;
    }
  }

  &.-error {
    border-color: $errorColor;

    &::before {
      background-color: $errorColor;
    }
  }

  &.-small {
    width: rem(40px);
    height: rem(20px);
  }
}
</style>
