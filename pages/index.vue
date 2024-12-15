<script setup lang="ts">
import type { Homepage } from "@/types";
const empty = "";
definePageMeta({
  layout: "none",
});
const POST_QUERY = groq`*[_type == "homepage"][0]`;
const homepageData = ref<Homepage | null>(null);

const { data } = await useSanityQuery(POST_QUERY);
homepageData.value = data.value as Homepage;

useSeoMeta({
  title: "Page accueil",
  description: "Description de la Page accueil",
  ogTitle: "Page accueil",
  ogDescription: "Description de la Page accueil",
});
</script>

<template>
  <div>
    <MyHeader :title="homepageData?.titrePrincipal"/>
    <FirstView :homepage-data="homepageData"/>
    <div class="homepage-gradient-transition">{{ empty }}</div>
<GlobalContainer>
<template #SlotTitle>
  <h3>Nos différentes fonctionnalités</h3>
</template>
<template #SlotDescription>
  <p>Un panel d'action conçues rien que pour vous</p>
</template>
<template #SlotComponent>
  <GlobalFeatures :homepage-data="homepageData"/>
</template>
</GlobalContainer>
<GlobalContainer>
<template #SlotTitle>
  <h3>Comment l'utiliser ?</h3>
</template>
<template #SlotDescription>
  <p>Avec son interface user friendly l'utilisation du service est un vrai jeu d'enfant !</p>
</template>
<template #SlotComponent>
  <GlobalUse :homepage-data="homepageData"/>
</template>
</GlobalContainer>
<GlobalContainer>
<template #SlotTitle>
  <h3>Ils l'ont essayé</h3>
</template>
<template #SlotDescription>
  <p>Ils sont mieux placés que nous pour vous en parler !</p>
</template>
<template #SlotComponent>
  <GlobalComment :homepage-data="homepageData"/>
</template>
</GlobalContainer>
    <!-- <div v-if="homepageData">
      <pre>{{ homepageData }}</pre>
    </div> -->
  </div>
</template>

<style lang="scss">
.homepage-gradient-transition {
  background: linear-gradient($backgroundColor, white);
  height: 50px;
}

</style>