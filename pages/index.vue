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
    <GlobalFeatures :homepage-data="homepageData"/>
    <!-- <div v-if="homepageData">
      <pre>{{ homepageData }}</pre>
    </div> -->
  </div>
</template>

<style lang="scss">
.homepage-gradient-transition {
  background: linear-gradient($backgroundColor, white);
  height: 200px;
}
</style>