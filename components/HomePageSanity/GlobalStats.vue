<script setup lang="ts">
defineProps({
    post: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <div v-if="post" class="GlobalStats">
        <div  v-for="stat in post[0].sectionAccueil.statistiques" :key="stat._key" class="GlobalStats__container">
            <div class="GlobalStats__layout"><span>{{ stat.valeur }}</span> <span>{{ stat.texteExplicatif }}</span></div>
        </div>
        <!-- <pre>
            {{ post }}
        </pre> -->
    </div>
</template>

<style lang="scss">
.GlobalStats {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    color: $primaryColor;
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
        line-height: 1;
    }
    &:last-child {
        font-size: 20px;
        font-weight: 300;
}
}
    }
}
</style>