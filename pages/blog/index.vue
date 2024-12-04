<script setup lang="ts">
import type { SanityDocument } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
interface Category {
 title: string;
 slug: { current: string };
}

interface Post extends SanityDocument {
 title: string;
 slug: { current: string };
 publishedAt: string;
 image?: SanityImageSource;
 category: Category;
}

const selectCategory = ref('')
const page = ref(1)
const postsPerPage = 2

const startPost = computed(() => (page.value - 1) * postsPerPage)
const endPost = computed(() => page.value * postsPerPage)

const { projectId, dataset } = useSanity().client.config()

const urlFor = (source: SanityImageSource) =>
 projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null

const { data: categories } = await useSanityQuery<Category[]>(groq`*[_type == "category"]{
 title,
 slug
}`)

const { data: posts } = await useSanityQuery<Post[]>(groq`*[
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
}`, { selectCategory, startPost, endPost })

const { data: count } = await useSanityQuery<number>(groq`count(*[
 _type == "post"
 && defined(slug.current)
 && ($selectCategory == '' || category->slug.current == $selectCategory)
])`, { selectCategory })

const pagination = computed(() => Math.ceil((count?.value || 0) / postsPerPage))

function onPageClick(i: number) {
 page.value = i
}

watchEffect(() => {
 if (page.value > pagination.value) {
   page.value = 1
 }
})
</script>

<template>
 <main>
   <section>
     <h1>Categories</h1>
     <div>
       <button 
         @click="selectCategory = ''">
         Tous les posts
       </button>
       <button 
         v-for="category in categories" 
         :key="category.slug.current"
         @click="selectCategory = category.slug.current">
         {{ category.title }}
       </button>
     </div>
   </section>

   <section>
     <h1>Posts</h1>
     <div>
       <article v-for="post in posts" :key="post._id">
         <NuxtLink :to="`/blog/${post.slug.current}`">
           <img 
             v-if="post.image" 
             :src="urlFor(post.image)?.width(200).height(200).url()"
             :alt="post.title"
           >
           <h2>{{ post.title }}</h2>
           <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
           <div v-if="post.category">
             {{ post.category.title }}
           </div>
         </NuxtLink>
       </article>
     </div>
   </section>

   <div>
     <button 
       v-for="i in pagination" 
       :key="i" 
       @click="onPageClick(i)"
       >
       {{ i }}
     </button>
   </div>
 </main>
</template>