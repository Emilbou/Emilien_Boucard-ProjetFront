<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const POST_QUERY = groq`*[_type == 'homepage']`;

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY);
</script>

<template>
    <div v-if="post" class="SanityArray">
        <div  v-for="stat in post[0].hero.stats" :key="stat._key" class="SanityArray__container">
            <div class="SanityArray__layout"><span>{{ stat.value }}</span> <span>{{ stat.text }}</span></div>
        </div>
        
    </div>
</template>

<style lang="scss">
.SanityArray {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    &__layout {
        display: flex;
flex-direction: column
    }
}
</style>