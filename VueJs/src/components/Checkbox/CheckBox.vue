<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const checked = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <input v-model="checked" type="checkbox" class="checkbox" >
</template>

<style lang="scss">
.checkbox {
  appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid $gray400;
  border-radius: rem(4px);
  width: rem(40px);
  aspect-ratio: 1 / 1;
  transition: 0.5s;
  outline: none;
  cursor: pointer;

  &:hover {
    border: $primaryColor solid rem(2px);
  }

  &:focus {
    border: $primaryColor solid rem(2px);
  }

  &:checked {
    border: $primaryColor solid rem(2px);
    background-color: $primaryColor;
    position: relative;

    &:before {
      font-family: FontAwesome;
      content: '✓';
      display: block;
      color: $gray100;
      font-size: auto;
      position: absolute;
      margin: auto;
    }
  }
}
</style>
