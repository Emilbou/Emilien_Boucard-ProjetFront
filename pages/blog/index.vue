<script setup lang="ts">
import type { SanityDocument } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const urlFor = (source: SanityImageSource) =>
 projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null

const selectedCategory = ref('')
const currentPage = ref(1)
const postsPerPage = 2

const startPost = computed(() => (currentPage.value - 1) * postsPerPage)
const endPost = computed(() => currentPage.value * postsPerPage)

const handleCategoryClick = (categorySlug: string) => {
 selectedCategory.value = selectedCategory.value === categorySlug ? '' : categorySlug
 currentPage.value = 1
}

function handlePageClick(page: number) {
 currentPage.value = page
}

const { data: categories } = await useSanityQuery<SanityDocument[]>(groq`*[_type == "category"]{
 title,
 slug
}`)

const { projectId, dataset } = useSanity().client.config()

const { data: posts } = await useSanityQuery<SanityDocument[]>(groq`*[
 _type == "post"
 && defined(slug.current)
 && ($selectedCategory == '' || category->slug.current == $selectedCategory)
]|order(publishedAt desc)[$startPost...$endPost]{
 _id, 
 title, 
 slug, 
 publishedAt, 
 image,
 "category": category->{title, slug}
}`, { 
 selectedCategory,
 startPost,
 endPost
})

const { data: totalPosts } = await useSanityQuery<number>(groq`count(*[
 _type == "post" 
 && defined(slug.current)
 && ($selectedCategory == '' || category->slug.current == $selectedCategory)
])`, { selectedCategory })

const totalPages = computed(() => 
 totalPosts?.value ? Math.ceil(totalPosts.value / postsPerPage) : 0
)

useSeoMeta({
  title:"Blog | liste des différents blogs",
  description: "Description de la page blog",
  ogTitle: "Blog | liste des différents blogs",
  ogDescription: "Description de la page blog",
})
</script>

<template>
 <main>
   <h1>Categories</h1>
   <div>
     <button 
       v-for="category in categories" 
       :key="category.slug.current"
       @click="handleCategoryClick(category.slug.current)"
     >
       {{ category.title }}
     </button>
   </div>

   <h1>Posts</h1>
   <div v-if="posts?.length">
     <div v-for="post in posts" :key="post._id">
       <NuxtLink :to="`/blog/${post.slug.current}`">
         <h2>{{ post.title }}</h2>
         <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
         <p v-if="post.category">{{ post.category.title }}</p>
         <img v-if="post.image" :src="urlFor(post.image)?.width(200).height(200).url()">
       </NuxtLink>
     </div>
   </div>
   <p v-else>No posts found</p>

   <div>
     <button 
       v-for="page in totalPages" 
       :key="page" 
       @click="handlePageClick(page)"
     >
       {{ page }}
     </button>
   </div>
 </main>
</template>