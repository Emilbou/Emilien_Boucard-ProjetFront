<script setup lang="ts">
import { useRoute, useAsyncData } from '#app'

const route = useRoute()

const { data: response } = await useAsyncData('history', () => 
  useTrackingApi(`tracking/${route.params.habit}/history`, {
    method: 'GET'
  })
)
</script>

<template>
  <div>
    <div>Paramètres : {{ route.params.habit }}</div>
    <div>Données : {{ response }}</div>
  </div>
</template>