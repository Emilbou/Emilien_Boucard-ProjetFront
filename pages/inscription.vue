<script setup lang="ts">
definePageMeta({layout: "none"})
useSeoMeta({
  title:"Page Register",
  description: "Description de la Page Register",
  ogTitle: "Page Register",
  ogDescription: "Description de la Page Register",
})

</script>
<template>

    <LoginForm :text-log="`S'inscrire`" :text-swap="'Déjà un compte ?'" :url-swap="'/connection'" action="register"/>

</template>