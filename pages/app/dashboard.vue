<script setup lang="ts">
import { useAsyncData } from "#app";

interface DashboardResponse {
  globalHabits: Array<{
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
  }>;
}

const AddHabitTitre = ref("");
const AddHabitDesc = ref("");

// Utilisation de useAsyncData avec le composable
const { data: response, refresh } = await useAsyncData<DashboardResponse>(
  "dashboard",
  () => useTrackingApi("dashboard", { method: "GET" })
);

// post pour nouvelle habitude
async function AddHabit(event: Event) {
  event.preventDefault();

  try {
    useTrackingApi("habits", {
      method: "POST",
      body: { title: AddHabitTitre.value, description: AddHabitDesc.value },
    });

    AddHabitTitre.value = "";
    AddHabitDesc.value = "";

    await refresh();
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'habitude:", error);
  }
}

async function updatedata() {
  await refresh();
}
</script>

<template>
  <div>
    <CardsContainer
      v-if="response"
      :response="response"
      @updatedata-parent="updatedata"
    />
    <pre>{{ response }}</pre>

    <form style="display: flex; flex-direction: column" @submit="AddHabit">
      <input v-model="AddHabitTitre" type="text" />
      <input v-model="AddHabitDesc" type="text" />
      <button>submit</button>
    </form>
  </div>
</template>
