<script setup lang="ts">
import { useAsyncData } from "#app";
definePageMeta({layout: "none"})

const { data: response, refresh } = await useAsyncData<DashboardResponse>(
  "dashboard",
  () => useTrackingApi("dashboard", { method: "GET" })
);

async function handleAddHabit(habitData: { title: string, description: string }) {
  try {
    await useTrackingApi("habits", {
      method: "POST",
      body: { title: habitData.title, description: habitData.description },
    });
    await refresh();
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'habitude:", error);
  }
}

async function updatedata() {
  await refresh();
}

interface HabitItem {
  id: number;
  progress: number;
  user_id?: number;
  title: string;
  description: string;
  is_global: number;
  created_at: string;
  today_users: number;
  total_users: number;
  total_completions: number;
  total_attempts: number;
  monthly_users: number;
  completedToday: boolean;
  success_rate: number;
}

interface DashboardResponse {
  globalHabits: HabitItem[];
  personalHabits: HabitItem[];
}
</script>

<template>
  <div class="dashboard">
    <HeaderDashboard />

    <div class="dashboard__content">
      <!-- Habitudes Globales -->
      <section class="dashboard__section">
        <div class="dashboard__section-header">
          <div class="dashboard__section-badge">Communauté</div>
          <h2 class="dashboard__section-title">Habitudes globales</h2>
          <p class="dashboard__section-description">
            Participez aux défis communs et progressez avec la communauté
          </p>
        </div>

        <CardsContainer 
          v-if="response"
          :response="response?.globalHabits"
          @updatedata-parent="updatedata"
        />
      </section>

      <!-- Séparateur avec indication visuelle -->
      <div class="dashboard__divider">
        <span class="dashboard__divider-text">Mes habitudes personnelles</span>
      </div>
      
      <!-- Habitudes Personnelles -->
      <section class="dashboard__section">
        <div class="dashboard__section-header">
          <div class="dashboard__section-badge -personal">Personnel</div>
          <h2 class="dashboard__section-title">Mes habitudes</h2>
          <p class="dashboard__section-description">
            Suivez vos objectifs personnels et votre progression individuelle
          </p>
        </div>

        <CardsContainer 
          v-if="response"
          :response="response?.personalHabits"
          @updatedata-parent="updatedata"
        />
      </section>

      <!-- Séparateur -->
      <div class="dashboard__divider"></div>
      
      <!-- Formulaire -->
      <FormDashboard 
        title="Nouvelle habitude"
        subtitle="Créez une nouvelle habitude pour enrichir votre routine quotidienne"
        @submit="handleAddHabit"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  min-height: 100vh;
  background-color: $backgroundColor;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  &__section {
    margin-bottom: 3rem;
    
    &:hover {
      .dashboard__section-badge {
        transform: translateY(-2px);
      }
    }
  }

  &__section-header {
    margin-bottom: 2rem;
  }

  &__section-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba($primaryColor, 0.1);
    color: $primaryColor;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1rem;
    transition: transform 0.2s ease;

    &.-personal {
      background: white;
      color: $Orange;
    }
  }

  &__section-title {
    color: $gray800;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &__section-description {
    color: $gray400;
    font-size: 1rem;
  }

  &__divider {
    position: relative;
    height: 1px;
    background: $gray100;
    margin: 3rem 0;
    text-align: center;

    &-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: $backgroundColor;
      padding: 0 1rem;
      color: $gray400;
      font-size: 0.875rem;
    }
  }
}
</style>