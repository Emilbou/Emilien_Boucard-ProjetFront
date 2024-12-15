<script setup lang="ts">
import type { Homepage } from '~/types';
defineProps<{
    homepageData: Homepage | null;
}>();
const OpenItem = ref(0);
function ToggleDD(index: number) {
    OpenItem.value = index;
}
</script>

<template>
    <div>
        <div v-for="(item, index) in homepageData?.questionsFrequentes" :key="index">

            <div> <button @click="() => ToggleDD(index)">{{ item.question }}</button></div>
            <Transition>
                <div v-if="index === OpenItem">{{ item.reponse }}</div>
            </Transition>
        </div>
    </div>
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>