<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  "category": category->
}`;

const filter = ref('');

const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);
const { data: categories } = await useSanityQuery<SanityDocument[]>(`*[_type == "category"]`);

const filteredPosts = ref<SanityDocument[]>([]);

watchEffect(async () => {
  if (filter.value) {
    const { data } = await useSanityQuery<SanityDocument[]>(
      `*[_type == "post" && category->title == $title]`,
      { title: filter.value }
    );
    filteredPosts.value = data.value || [];
  }
});

console.log(posts);

</script>

<template>
  <div>
    <select v-if="categories" id="option_id"  v-model="filter" name="option">
      <option v-for="cat in categories" :key="cat._id" :value="cat.title">{{cat.title}}</option>

    </select>
    <h1>{{ filter }}</h1>
    <nav>
      <ul>
        <li v-for="post in filter === '' ? posts : filteredPosts" :key="post._id">
          <div v-if="post.category" class="Sanity__category_container"><pre>{{ post.category.title }}</pre></div>
          <NuxtLink :to="`/blog/${post.slug.current}`"><h3>{{ post.title }}</h3></NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.Sanity__category_container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: black solid .3px;
  width: fit-content;
  padding-inline: 2rem;
  border-radius: 0.5rem;


}
</style>