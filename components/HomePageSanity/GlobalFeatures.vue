<script setup lang="ts">
import type { Homepage } from '~/types';
defineProps<{
  homepageData: Homepage | null;
}>()

const {urlFor} = useSanityImage();
</script>

<template>
    <div class="GlobalFeatures">
        <div v-for="item in homepageData?.fonctionnalites" :key="item._key" class="GlobalFeatures__container" :style="{backgroundColor: item.couleurFond}">
            <div class="GlobalFeatures__iconContainer">
                <img v-if="item.icone"  class="GlobalFeatures__icon" :src="urlFor(item.icone)?.url()" :alt="item.titreFonctionnalite">
            </div>
            <div class="GlobalFeatures__layout">
                <span class="GlobalFeatures__title">{{ item.titreFonctionnalite }}</span>
                <span class="GlobalFeatures__desc">{{ item.description }}</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.GlobalFeatures{
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    padding: 0 10%;
    @media screen and (max-width: 800px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
      
        
    }
    &__container{
        width: 60%;
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 20px;
        border-radius: 30px;
        align-items: start;
        justify-content: space-between;
        text-align: start;
        .GlobalFeatures__iconContainer{
            width: 50px;
            height: 50px;
            padding: 10px;
            border-radius: 20px;
            background-color: rgba(white, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            .GlobalFeatures__icon{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
    &__layout{
        display: flex;
        flex-direction: column;
        .GlobalFeatures__title{
            font-size: 30px;
            color: white;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .GlobalFeatures__desc{
            font-size: 20px;
            color: white;
            line-height: 1;
            font-weight: 200;
        }
    }
}
</style>