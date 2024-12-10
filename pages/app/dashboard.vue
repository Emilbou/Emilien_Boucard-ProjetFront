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

const response = ref<DashboardResponse | null>(null);

onMounted(async () => {
  const res = await fetch(`http://localhost:4000/dashboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useCookie("api_tracking_jwt").value}`,
    },
  });
  response.value = await res.json();
});
</script>

<template>
  <div>

<CardsContainer v-if="response" :response="response"/>
    <pre>{{ response }}</pre>
  </div>
</template>
