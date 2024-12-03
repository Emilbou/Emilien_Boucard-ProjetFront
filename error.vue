<script setup lang="ts">
import { ref } from 'vue';

const error = ref({ statusCode: 404 });
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
