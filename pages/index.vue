<script setup lang="ts">
// import type { SanityDocument } from "@sanity/client";
import type { SanityDocument } from "@sanity/client";

const POST_QUERY = groq`*[_type == 'homepage']`;

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY);
console.log(post);

// const tableArray = [
//   {
//     "index": 1,
//     "date": "2024-12-01",
//     "statut": true,
//     "dateEnregistrement": "2024-11-25"
//   },
//   {
//     "index": 2,
//     "date": "2024-12-02",
//     "statut": false,
//     "dateEnregistrement": "2024-11-26"
//   },
//   {
//     "index": 3,
//     "date": "2024-12-03",
//     "statut": false,
//     "dateEnregistrement": "2024-11-27"
//   },
//   {
//     "index": 4,
//     "date": "2024-12-04",
//     "statut": true,
//     "dateEnregistrement": "2024-11-28"
//   },
//   {
//     "index": 5,
//     "date": "2024-12-05",
//     "statut": false,
//     "dateEnregistrement": "2024-11-29"
//   },
//   {
//     "index": 6,
//     "date": "2024-12-06",
//     "statut": true,
//     "dateEnregistrement": "2024-11-30"
//   }
// ]


// const POSTS_QUERY = groq`*[
//   _type == "post"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

// const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);

useSeoMeta({
  title:"Page accueil",
  description: "Description de la Page accueil",
  ogTitle: "Page accueil",
  ogDescription: "Description de la Page accueil",
})
</script>

<template>
  <div  v-if="post">
 
      <Highlight>
        
        <h1 class="homepage__h1">{{ post[0].titrePrincipal }}</h1>
        <h3 class="homepage__h3">{{ post[0].sectionAccueil.texteDescription }}</h3>
        <GlobalStats class="homepage__GlobalStats" :post="post"/>
      </Highlight>


    <!-- <pre>{{ post[0].sectionAccueil.titrePrincipal }}</pre> -->

<Highlight>
  <GlobalFeatures class="homepage__GlobalFeatures" :post="post"/>
</Highlight>

 </div>
</template>

<style lang="scss">
body {

  background-color: #F7F6F2;
}
.homepage__h1 {
  line-height: 1;
  text-decoration: underline
}
.homepage__h3 {
  color: $primaryColor;
  font-size: 20px;
  font-weight: 300;
  margin: 20px 0;
  text-wrap-style: balance;
}
.homepage__GlobalStats{
  margin-top: 50px;
  margin-bottom: 50px;
}
.homepage__GlobalFeatures{
  margin-top: 50px;
  margin-bottom: 50px;
}

</style>