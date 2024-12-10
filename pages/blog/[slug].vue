<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";


const {urlFor} = useSanityImage();

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const { params } = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);

if (!post.value) {
  //  navigateTo('/404')
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

//réutiliser ca partout pour le seo
//penser a faire la passerelle avec le groupe seo de sanity et faire un composable pour le faire partout 
useSeoMeta({
  title:"Blog | " + post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  ogImage: post.value.image && urlFor(post.value.image) ? urlFor(post.value.image)?.url() : '/meta-default.png',
})
</script>

<template>
  <main
    v-if="post">
    <a href="/blog/" >&larr; Back to posts</a>
    <img
      v-if="post.image"
      :src="urlFor(post.image)?.width(550).height(310).url()"
      :alt="post?.title"
      width="550"
      height="310"
    >
    <h1 v-if="post.title">{{ post.title }}</h1>
    <div>
      <p v-if="post.publishedAt">
        Published: {{ new Date(post.publishedAt).toLocaleDateString() }}
      </p>
      <SanityContent v-if="post.body" :blocks="post.body" />
    </div>
  </main>
</template>