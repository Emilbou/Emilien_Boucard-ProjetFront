<script setup lang="ts">
import type { SanityDocument } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null

const selectCategory = ref('')

function onPageClick(i: number) {
  page.value = i
}

const page = ref(1)
const postsPerPage = 2

const startPost = computed(() => (page.value - 1) * postsPerPage)
const endPost = computed(() => page.value * postsPerPage)

const CATEGORIES_QUERY = groq`*[_type == "category"]{
  title,
  slug
}`

const { data: categories } = await useSanityQuery<SanityDocument[]>(CATEGORIES_QUERY)
const { projectId, dataset } = useSanity().client.config()

const { data: posts } = await useSanityQuery<SanityDocument[]>(groq`*[
  _type == "post"
  && defined(slug.current)
  && ($selectCategory == '' || category->slug.current == $selectCategory)
]|order(publishedAt desc)[$startPost...$endPost]{
  _id, 
  title, 
  slug, 
  publishedAt, 
  image, 
  "category": category->{title, slug}
}`, { selectCategory, startPost: startPost, endPost: endPost })



</script>

<template>
  <div>
    <main>
      <h1>Categories</h1>
      <div>
        <button 
          v-for="category in categories" 
          :key="category.slug.current"
          @click="selectCategory = category.slug.current">
          {{ category.title }}
        </button>
      </div>

      <h1>Posts</h1>
      <div v-for="post in posts" :key="post._id">
        <div>
          <NuxtLink :to="`/${post.slug.current}`">
            <h2 class="text-xl font-semibold">{{ post.title }}</h2>
            <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
            <div v-if="post.category">
  <p>{{ post.category.title }}</p>
</div>
            <img v-if="post.image" :src="urlFor(post.image)?.width(200).height(200).url()">
          </NuxtLink>
        </div>
      </div>
      <div>
        <button v-for="i in 5" :key="i" @click="onPageClick(i)">
          {{ i }}
        </button>
      </div>
    </main>
  </div>
</template>