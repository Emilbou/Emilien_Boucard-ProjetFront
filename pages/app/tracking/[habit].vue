<script setup lang="ts">
import HeaderDashboard from "~/components/Header/HeaderDashboard.vue";
definePageMeta({layout: "none"})

const route = useRoute()

const { data : response } = await useAsyncData('history', async () => {
  const response = await fetch(`http://localhost:4000/tracking/${route.params.habit}/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useCookie("api_tracking_jwt").value}`,
    },
  });
  return await response.json();
})
</script>

<template>
  <div class="habit-page">
    <HeaderDashboard />
    
    <div class="habit-page__content">
      <!-- En-tête basique -->
      <div class="habit-page__header">
        <h1 class="habit-page__title">{{ response.habit.title }}</h1>
        <h3 class="habit-page__subtitle">{{ response.habit.description }}</h3>
      </div>
      <!-- Table existante -->
      <CustomTable :response="response"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.habit-page {
  min-height: 100vh;
  background-color: $backgroundColor;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  &__header {
    background: $white;
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 12px rgba($darkestColor, 0.05);
  }

  &__title {
    color: $gray800;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__subtitle {
    color: $gray400;
    font-size: 1.125rem;
  }
}
</style>