<script setup lang="ts">
defineProps({
    post: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <div v-if="post" class="SanityArray">
        <div  v-for="stat in post[0].sectionAccueil.statistiques" :key="stat._key" class="SanityArray__container">
            <div class="SanityArray__layout"><span>{{ stat.valeur }}</span> <span>{{ stat.texteExplicatif }}</span></div>
        </div>
        <!-- <pre>
            {{ post }}
        </pre> -->
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
flex-direction: column;
span {
    &:first-child {
        font-size: 40px;
        font-weight: bold;
    }
    &:last-child {
        font-size: 20px;
        font-weight: 300;
}
}
    }
}
</style>