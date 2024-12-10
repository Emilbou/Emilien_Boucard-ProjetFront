<script setup lang="ts">
const response = ref(null);

onMounted(async () => {
  const res = await fetch(`http://localhost:4000/dashboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${useCookie("api_tracking_jwt").value}`,
    },
  });
  response.value = await res.json();
});
</script>

<template>
    <div>
        <pre>{{ response }}</pre>
    </div>
</template>