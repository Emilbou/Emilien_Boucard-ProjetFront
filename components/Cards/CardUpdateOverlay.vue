<script setup lang="ts">
defineProps({
    titrevalue: {
        type: String,
        default: "Titre"
    },
    descvalue: {
        type: String,
        default: "Description"
    }
})
</script>
<template>
    <div class="CardUpdateOverlay">
<MyInput :placeholder="titrevalue" />
<MyInput :placeholder="descvalue"/>

    </div>
</template>
<style lang="scss">
.CardUpdateOverlay{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);
    gap: 1rem;
}
</style>