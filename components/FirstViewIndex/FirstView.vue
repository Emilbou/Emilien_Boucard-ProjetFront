<script setup lang="ts">
import type { Homepage } from '~/types';
const empty = '';
defineProps<{
  homepageData: Homepage | null;
}>()
</script>

<template>
  <div class="first-view">
    <div>{{ empty }}</div>
    <div class="first-view__title-section">
      <h2 class="first-view__heading">
        {{ homepageData?.sectionAccueil.titrePrincipal }}
      </h2>
      <p class="first-view__description">
        {{ homepageData?.sectionAccueil.texteDescription }}
      </p>
      <MyButton :disabled="false" class="first-view__cta">
        Découvrir
      </MyButton>
    </div>

    <div class="first-view__stats">
      <div
        v-for="(item, index) in homepageData?.sectionAccueil.statistiques"
        :key="index"
        class="first-view__stat-item"
      >
        <span class="first-view__stat-value">{{ item.valeur }}</span>
        <span class="first-view__stat-text">{{ item.texteExplicatif }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.first-view {
  $self: &;
  margin-top: -84px;
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $backgroundColor;

  &__title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20%;
    margin-top: 4rem;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
      margin-top: 2rem;
    }
  }

  &__heading {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: $primaryColor;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  &__description {
    color: $primaryColor;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 2rem;
    line-height: 1.6;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  &__cta {
    min-width: 200px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }

    @media screen and (max-width: 768px) {
      min-width: 160px;
    }
  }

  &__stats {
    width: 50%;
    background-color: white;
    display: flex;
    padding: 3rem 6rem;
    border-top-right-radius: 500px;
    justify-content: space-between;
    border-top: solid 1px $primaryColor;
    border-right: solid 1px $primaryColor;
    border-bottom: solid 1px $primaryColor;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 2rem;
      border-radius: 0;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
    }
  }

  &__stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $primaryColor;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    @media screen and (max-width: 768px) {
      flex: 0 0 45%;
    }
  }

  &__stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  &__stat-text {
    font-size: 1.25rem;
    font-weight: 300;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
}
</style>