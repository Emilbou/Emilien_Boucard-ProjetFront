<script setup lang="ts">
definePageMeta({layout: "none"})
</script>
<template>
    <LoginForm :text-log="'Se connecter'" :text-swap="'Pas encore de compte ?'" :url-swap="'/inscription'"/>
</template>