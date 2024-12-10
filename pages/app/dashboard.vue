<script setup lang="ts">
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

const { data: response, refresh } = await useAsyncData<DashboardResponse>('dashboard', async () => {
  const res = await fetch(`http://localhost:4000/dashboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useCookie("api_tracking_jwt").value}`,
    },
  });
  return res.json();
});

async function AddHabit(event: Event) {
  event.preventDefault();
  
  try {
    await fetch(`http://localhost:4000/habits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${useCookie("api_tracking_jwt").value}`
      },
      body: JSON.stringify({
        title: AddHabitTitre.value,
        description: AddHabitDesc.value,
      }),
    });
    
    AddHabitTitre.value = "";
    AddHabitDesc.value = "";
                                                                                        
    await refresh();
    
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'habitude:', error);
  }
}
</script>

<template>
  <div>
    <CardsContainer v-if="response" :response="response" />
    <pre>{{ response }}</pre>

    <form style="display: flex; flex-direction: column;" @submit="AddHabit">
      <input v-model="AddHabitTitre" type="text">
      <input v-model="AddHabitDesc" type="text">
      <button>submit</button>
    </form>
  </div>
</template>