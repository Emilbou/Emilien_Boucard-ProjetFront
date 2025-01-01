<script setup lang="ts">
import type { Homepage } from '~/types';

defineProps<{
  homepageData: Homepage | null;
}>();

const openItem = ref(0);

function toggleDD(index: number) {
  openItem.value = openItem.value === index ? -1 : index;
}
</script>

<template>
  <section class="faq">
    <div class="faq__container">
      <div 
        v-for="(item, index) in homepageData?.questionsFrequentes" 
        :key="index"
        class="faq__item"
      >
        <button 
          class="faq__question"
          @click="() => toggleDD(index)"
          :class="{ 'faq__question--active': index === openItem }"
        >
          <span class="faq__question-text">{{ item.question }}</span>
          <svg 
            class="faq__icon" 
            :class="{ 'faq__icon--rotated': index === openItem }"
            viewBox="0 0 24 24" 
            width="24" 
            height="24"
          >
            <path 
              fill="none" 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M12 5v14M5 12h14"
            />
          </svg>
        </button>
        
        <Transition>
          <div v-if="index === openItem" class="faq__answer">
            {{ item.reponse }}
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
    width: 100%;
  }

  &__container {
    max-width: 800px;
    margin: 0 auto;
  }

  &__item {
    border-bottom: 1px solid $gray400;

    &:first-child {
      border-top: 1px solid $gray400;
    }
  }

  &__question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    color: $gray800;
    transition: color 0.3s ease;

    &:hover {
      color: $primaryColor;
    }

    &--active {
      color: $primaryColor;
    }

    &-text {
      font-size: 1.125rem;
      font-weight: 500;
      padding-right: 2rem;
    }
  }

  &__icon {
    flex-shrink: 0;
    transition: transform 0.3s ease;
    color: currentColor;

    &--rotated {
      transform: rotate(45deg);
    }
  }

  &__answer {
    padding-bottom: 1.5rem;
    color: $gray800;
    line-height: 1.6;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  max-height: 300px;
}
</style>