<script setup lang="ts">
definePageMeta({layout: "none"})
useSeoMeta({
  title:"Page Login",
  description: "Description de la Page Login",
  ogTitle: "Page Login",
  ogDescription: "Description de la Page Login",
})
</script>
<template>
    <LoginForm :text-log="'Se connecter'" :text-swap="'Pas encore de compte ?'" :url-swap="'/inscription'"/>
</template>