<script setup lang="ts">
definePageMeta({layout: "none"})
</script>
<template>
    <LoginForm :text-log="`S'inscrire`" :text-swap="'Déjà un compte ?'" :url-swap="'/connection'"/>
</template>