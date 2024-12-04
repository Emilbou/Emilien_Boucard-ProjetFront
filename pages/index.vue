<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);

useSeoMeta({
  title:"Page accueil",
  description: "Description de la Page accueil",
  ogTitle: "Page accueil",
  ogDescription: "Description de la Page accueil",
})
</script>

<template>
  <div>
  <CustomTable/>
<CardsContainer/>

    {{ posts }}
 </div>
</template>