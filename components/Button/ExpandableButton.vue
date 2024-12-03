<script setup lang="ts">
defineProps<{
  toggleProps: boolean;
}>();
const emit = defineEmits<{
  "toggle-expand": [];
}>();
</script>

<template>
  <div class="ExpandableButton__layout">
    <MyButton
      :disabled="false"
      class="ExpandableButton__button"
      variant="outline"
      @click="emit('toggle-expand')"
    >
      {{ toggleProps ? "Voir moins" : "Voir plus" }}
    </MyButton>
  </div>
</template>

<style lang="scss">
.ExpandableButton__layout {
  display: flex;
  justify-content: center;
  width: 100%;
.ExpandableButton__button {
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 50%;
}
}
</style>
