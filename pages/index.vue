<script setup lang="ts">
import type { Homepage } from "@/types";

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
<div class="homepage__first-view">
  <h1 class="homepage__h1">{{homepageData?.sectionAccueil.titrePrincipal}}</h1>
  <h3>{{ homepageData?.sectionAccueil.texteDescription }}</h3>
  <MyButton :disabled="false"/>
</div>


    <div v-if="homepageData">
      <pre>{{ homepageData }}</pre>
    </div>
  </div>
</template>

<style lang="scss">
.homepage__first-view {
  width: 100vw;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

S

.homepage__h1 {
  line-height: 1;
  text-decoration: underline;
}

.homepage__h3 {
  color: $primaryColor;
  font-size: 20px;
  font-weight: 300;
  margin: 20px 0;
  text-wrap-style: balance;
}

.homepage__GlobalStats {
  margin-top: 50px;
  margin-bottom: 50px;
}

.homepage__GlobalFeatures {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
