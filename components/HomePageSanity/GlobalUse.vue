<script setup lang="ts">
import type { Homepage } from "~/types";

defineProps<{
  homepageData: Homepage | null;
}>();
</script>

<template>
  <section class="usage">
    <div class="usage__cards">
      <div
        v-for="(item, index) in homepageData?.processusUtilisation.etapes"
        :key="index"
        class="usage__card"
      >
        <div class="usage__card-number">{{ index + 1 }}</div>
        <div class="usage__card-content">
          <h3 class="usage__card-title">{{ item.titreEtape }}</h3>
          <p class="usage__card-description">{{ item.descriptionEtape }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.usage {
  padding: 2rem 1rem;

  &__cards {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__card {
    flex: 1;
    min-width: 250px;
    max-width: 350px;
    position: relative;
    padding: 2rem;
    border: 3px solid $primaryColor;
    border-radius: 20px;
    background-color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    &-number {
      position: absolute;
      top: -15px;
      left: -15px;
      width: 30px;
      height: 30px;
      background-color: $primaryColor;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: $primaryColor;
      margin: 0;
    }

    &-description {
      font-size: 1rem;
      line-height: 1.5;
      color: #666;
      margin: 0;
    }
  }
}
</style>