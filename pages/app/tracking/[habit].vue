<script setup lang="ts">

const route = useRoute()

const { data : response } = await useAsyncData('history', async () => {
  const response = await fetch(`http://localhost:4000/tracking/${route.params.habit}/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useCookie("api_tracking_jwt").value}`,
    },
  });
  console.log('gosjthoj',response)
  return await response.json();
})

</script>

<template>
    <div class="">
      <div>
        <h1>{{ response.habit.title }}</h1>
        <h3>{{ response.habit.description }}</h3>
      </div>

        <CustomTable :response="response"/>
    </div>
</template>