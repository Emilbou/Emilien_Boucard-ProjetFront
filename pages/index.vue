<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const tableArray = [
  {
    "index": 1,
    "date": "2024-12-01",
    "statut": true,
    "dateEnregistrement": "2024-11-25"
  },
  {
    "index": 2,
    "date": "2024-12-02",
    "statut": false,
    "dateEnregistrement": "2024-11-26"
  },
  {
    "index": 3,
    "date": "2024-12-03",
    "statut": false,
    "dateEnregistrement": "2024-11-27"
  },
  {
    "index": 4,
    "date": "2024-12-04",
    "statut": true,
    "dateEnregistrement": "2024-11-28"
  },
  {
    "index": 5,
    "date": "2024-12-05",
    "statut": false,
    "dateEnregistrement": "2024-11-29"
  },
  {
    "index": 6,
    "date": "2024-12-06",
    "statut": true,
    "dateEnregistrement": "2024-11-30"
  }
]


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
  <CustomTable :table-array="tableArray"/>
<CardsContainer/>

    {{ posts }}
 </div>
</template>