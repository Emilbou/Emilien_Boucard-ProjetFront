<script lang="ts" setup>
import Card from './Card.vue'

const CardArray = [
  {
    id: 1,
    process: 10,
    text: 'Premier élément',
  },
  {
    id: 2,
    process: 20,
    text: 'Deuxième élément',
  },
  {
    id: 3,
    process: 30,
    text: 'Troisième élément',
  },
  {
    id: 4,
    process: 40,
    text: 'Quatrième élément',
  },
  {
    id: 5,
    process: 50,
    text: 'Cinquième élément',
  },
]
</script>

<template>
  <div class="CardsContainer">
    <Card v-for="item in CardArray" :key="item.id" :progress="item.process" :Text="item.text" />
  </div>
</template>

<style lang="scss">
.CardsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
