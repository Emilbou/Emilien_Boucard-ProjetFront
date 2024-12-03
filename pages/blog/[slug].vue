<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const { params } = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
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
      <SanityImage :asset-id="post.image.asset._ref" style="max-width: 100%;"/>
    </div>
  </main>
</template>