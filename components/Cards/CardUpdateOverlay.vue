<script setup lang="ts">
const emit = defineEmits(['update:modelValueTitre', 'update:modelValueDesc']);

defineProps({
    titrevalue: {
        type: String,
        default: 'Titre'
    },
    descvalue: {
        type: String,
        default: 'Description'
    },
    modelValueTitre: {
        type: String,
        default: 'Titre'
    },
    modelValueDesc: {
        type: String,
        default: 'Description'
    }
});

function onInputTitre(e: Event) {
    emit('update:modelValueTitre', (e.target as HTMLInputElement).value);
}

function onInputDesc(e: Event) {
    emit('update:modelValueDesc', (e.target as HTMLInputElement).value);
}
</script>
<template>
    <div class="CardUpdateOverlay">
<MyInput :placeholder="titrevalue"  :value="modelValueTitre" @input="onInputTitre"/>
<MyInput :placeholder="descvalue" :value="modelValueDesc" @input="onInputDesc"/>

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
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    gap: 1rem;
}
</style>