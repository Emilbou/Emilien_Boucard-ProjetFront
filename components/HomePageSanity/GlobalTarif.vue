<script setup lang="ts">
import type { Homepage } from '~/types';

defineProps<{
  homepageData: Homepage | null;
}>();
</script>

<template>
  <section class="pricing">
    <div class="pricing__container">
      <div 
        v-for="(plan, index) in homepageData?.tarification.formules" 
        :key="index"
        class="pricing__card"
        :class="{
          'pricing__card--highlighted': plan.periodicite === 'annuel',
          'pricing__card--free': plan.prix === 0
        }"
      >
        <div class="pricing__card-header">
          <h3 class="pricing__card-title">{{ plan.nomFormule }}</h3>
          <div class="pricing__card-price">
            <span class="pricing__card-amount">{{ plan.prix }}€</span>
            <span class="pricing__card-period">/{{ plan.periodicite }}</span>
          </div>
        </div>

        <ul class="pricing__card-features" >
          <li 
          v-for="(feature, featureIndex) in plan.caracteristiques" 
            :key="featureIndex"
            class="pricing__card-feature"
          >
            <svg class="pricing__card-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            {{ feature }}
          </li>
        </ul>

        <button class="pricing__card-button">
          {{ plan.prix === 0 ? 'Commencer gratuitement' : `Choisir l'offre ${plan.periodicite}` }}
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pricing {
  padding: 2rem 0;
  background-color: $backgroundColor;
  width: 100%;

  @media (min-width: 768px) {
    padding: 4rem 0;
    width: 100%;
  }     

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-inline: 3rem;
    gap: 2rem;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: stretch;
    }
  }

  &__card {
    flex: 1;
    background-color: white;
    border-radius: 16px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    &--highlighted {
      border: 2px solid $primaryColor;
      
    }

    &-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    &-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: $gray800;
      margin-bottom: 1rem;
    }

    &-price {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 0.5rem;
    }

    &-amount {
      font-size: 2.5rem;
      font-weight: 700;
      color: $gray800;
      font-family: 'Gazpacho';
    }

    &-period {
      color: $gray400;
    }

    &-features {
      list-style: none;
      padding: 0;
      margin: 0;
      flex-grow: 1;
    }

    &-feature {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 0;
      color: $gray800;
      
      &:not(:last-child) {
        border-bottom: 1px solid $gray400;
      }
    }

    &-icon {
      flex-shrink: 0;
      color: $primaryColor;
    }

    &-button {
      margin-top: 2rem;
      width: 100%;
      padding: 1rem;
      border-radius: 8px;
      border: 2px solid $primaryColor;
      background-color: $primaryColor;
      color: white;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;

      .pricing__card--free & {
        background-color: transparent;
        color: $primaryColor;
      }

      &:hover {
        background-color: darken($primaryColor, 5%);
        border-color: darken($primaryColor, 5%);
        color: white;
      }
    }
  }
}
</style>